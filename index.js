const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://id.jobcan.jp/users/sign_in?app_key=atd');
  await page.type('#user_email', 'xxxxxxx');
  await page.type('#user_password', 'xxxxxxx');
  await Promise.all([
    page.waitForNavigation(),
    page.click('input[class="form__login"]')
  ]);
  // await page.click('#adit-button-push');
  await page.goto('https://ssl.jobcan.jp/employee/attendance');
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
})();
