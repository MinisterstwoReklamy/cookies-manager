const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'https://www.777ulotki.pl/';

  await page.goto(url, {waitUntil: "load"});

  const cookieAcceptBtn = await page.$("#menu2");

  await console.log('The element cookieAcceptBtn was resolved to: ' + cookieAcceptBtn);
  await cookieAcceptBtn.click();  

  console.log(await page.cookies());

  await browser.close();
})();
