const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'https://www.777ulotki.pl/';

  await page.goto(url, {waitUntil: "domcontentloaded"});
  const acceptBtnSelector = ">>> [class='cm__btn']";
  console.log( acceptBtnSelector );
  const accept = await page.waitForSelector(acceptBtnSelector);
  await accept.click();
  await page.waitForSelector(acceptBtnSelector, {hidden: true});

  console.log(await page.cookies());

  await browser.close();
})();
