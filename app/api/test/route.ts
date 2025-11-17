import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Check for test secret header
  const testSecret = request.headers.get("X-Test-Secret");
  if (testSecret !== process.env.TEST_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ message: "Test API works!" });
}
