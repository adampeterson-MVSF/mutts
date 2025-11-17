import { chromium } from 'playwright';

async function testLogin() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Capture console logs
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.text());
  });

  try {
    console.log('Navigating to login page...');
    await page.goto('http://localhost:3000/auth/login');
    
    console.log('Filling login form...');
    await page.fill('[data-testid="input-login-email"]', 'volunteer@test.example.com');
    await page.fill('[data-testid="input-login-password"]', 'testpassword123');
    
    console.log('Submitting login...');
    await page.click('[data-testid="btn-submit"]');
    
    // Wait for navigation
    await page.waitForLoadState('networkidle');
    
    const currentURL = page.url();
    console.log('Current URL after login:', currentURL);
    
    // Check page content
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check for volunteer-specific content
    const volunteerContent = await page.locator('text=/volunteer|shift/i').count();
    console.log('Volunteer-related content found:', volunteerContent);
    
    await page.screenshot({ path: 'login_result.png' });
    console.log('Screenshot saved');
    
  } catch (error) {
    console.error('Error during login test:', error.message);
  } finally {
    await browser.close();
  }
}

testLogin();
