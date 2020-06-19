const puppeteer = require('puppeteer');
const cron = require('node-cron');
const config = require('./config.json')

function attendance() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://id.jobcan.jp/users/sign_in?app_key=atd');
  await page.type('#user_email', config.email);
  await page.type('#user_password', config.pass);
  await Promise.all([
    page.waitForNavigation(),
    page.click('input[class="form__login"]')
  ]);
  await page.click('#adit-button-push');
  await page.goto('https://ssl.jobcan.jp/employee/attendance');
  await page.screenshot({path: 'screenshot.png'});
  await browser.close();
};

cron.schedule('0 59 9 * * *', () => {
  attendance();
};

cron.schedule('0 1 19 * * *', () => {
  attendance();
};
