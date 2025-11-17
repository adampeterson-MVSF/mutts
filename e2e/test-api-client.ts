// WARNING: test-only authentication. Never expose these APIs outside test envs.

const TEST_SECRET = process.env.TEST_SECRET || 'test-secret-default';

export interface ResetSummary {
  deterministicIds?: Record<string, string>;
  ok?: boolean;
  success?: boolean;
  isDuplicateError?: boolean;
  error?: string;
}

export async function waitForServerReady(baseURL: string): Promise<void> {
  const log = (message: string, ...args: unknown[]) =>
    console.log(`[TEST API CLIENT][${new Date().toISOString()}] ${message}`, ...args);
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const healthUrl = `${baseURL}/api/test-api/health`;
  const maxAttempts = 30; // 30 seconds total
  const retryDelay = 1000; // 1 second between attempts

  log('Waiting for server to be ready at %s', baseURL);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(healthUrl, {
        method: 'GET',
        headers: {
          'x-test-secret': TEST_SECRET,
        },
      });

      if (response.ok) {
        log('Server is ready (attempt %d/%d)', attempt, maxAttempts);
        return;
      } else {
        log('Server not ready yet (attempt %d/%d): %d %s', attempt, maxAttempts, response.status, response.statusText);
      }
    } catch (error) {
      log('Server not ready yet (attempt %d/%d): %o', attempt, maxAttempts, error);
    }

    if (attempt < maxAttempts) {
      await delay(retryDelay);
    }
  }

  throw new Error(`Server failed to become ready after ${maxAttempts} attempts`);
}

export async function resetDatabase(baseURL: string, dataset: 'realistic' | 'demo' = 'realistic'): Promise<ResetSummary> {
  const log = (message: string, ...args: unknown[]) =>
    console.log(`[TEST API CLIENT][${new Date().toISOString()}] ${message}`, ...args);
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const resetUrl = new URL(`${baseURL}/api/test-api/reset`);
  resetUrl.searchParams.set('dataset', dataset);

  const maxAttempts = 8;
  let summary: ResetSummary | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(resetUrl.toString(), {
        method: 'POST',
        headers: {
          'x-test-secret': TEST_SECRET,
        },
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Reset endpoint failed (${response.status}): ${body}`);
      }

      const bodyText = await response.text();
      try {
        summary = JSON.parse(bodyText);
      } catch (parseError) {
        throw new Error(`Unable to parse reset response: ${parseError instanceof Error ? parseError.message : 'Unknown parse error'}. Response: ${bodyText.slice(0, 200)}`);
      }
      break;
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
      log('Reset attempt %d/%d failed (%s). Retrying after 500ms...', attempt, maxAttempts, error instanceof Error ? error.message : String(error));
      await delay(500);
    }
  }

  if (!summary) {
    throw new Error('No summary received from reset endpoint');
  }

  return summary;
}

export async function createTestSession(baseURL: string, role: "ADMIN" | "STAFF" | "VOLUNTEER"): Promise<string> {
  const log = (message: string, ...args: unknown[]) =>
    console.log(`[TEST API CLIENT][${new Date().toISOString()}] ${message}`, ...args);

  log(`Creating session for role: ${role} via test API`);

  const resp = await fetch(`${baseURL}/api/test-api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-test-secret": TEST_SECRET,
    },
    body: JSON.stringify({ role }),
  });

  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(`Failed to create test session for ${role}: ${resp.status} - ${errorText}`);
  }

  const { cookie } = await resp.json();

  if (!cookie) {
    throw new Error(`No cookie returned for ${role} login`);
  }

  return cookie;
}
