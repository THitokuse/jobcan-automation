const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://id.jobcan.jp/users/sign_in?app_key=atd');
  await page.type('#user_email', 'hasegawa@hitokuse.com');
  await page.type('#user_password', 'hasegawa123');
  await Promise.all([
    page.waitForNavigation(),
    page.click('input[class="form__login"]')
  ]);
  await page.goto('https://ssl.jobcan.jp/employee/man-hour-manage');
  await page.click('.btn-info');
  await page.waitForSelector('.btn-default', {visible: true});
  await page.select('select[name="color"]', 'red');
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
})();
