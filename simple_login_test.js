import { chromium } from 'playwright';

async function simpleLoginTest() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Capture all console messages
  page.on('console', msg => {
    console.log('PAGE LOG:', msg.type(), '-', msg.text());
  });

  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  try {
    console.log('Going to login page...');
    await page.goto('http://localhost:3000/auth/login');
    
    console.log('Waiting for form to be ready...');
    await page.waitForSelector('[data-testid="input-login-email"]');
    
    console.log('Filling form...');
    await page.fill('[data-testid="input-login-email"]', 'volunteer@test.example.com');
    await page.fill('[data-testid="input-login-password"]', 'testpassword123');
    
    console.log('Clicking submit...');
    await page.click('[data-testid="btn-submit"]');
    
    console.log('Waiting for navigation or error...');
    await page.waitForTimeout(5000);
    
    const currentUrl = page.url();
    console.log('Final URL:', currentUrl);
    
    // Check for errors
    const errorText = await page.locator('[data-testid="message-error"]').textContent();
    if (errorText) {
      console.log('Error message:', errorText);
    } else {
      console.log('No error message found');
    }
    
  } catch (error) {
    console.error('Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

simpleLoginTest();
