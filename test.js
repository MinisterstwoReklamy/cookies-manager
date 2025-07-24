const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'https://www.777ulotki.pl/';

  await page.goto(url, {waitUntil: "domcontentloaded"});
  const acceptBtnSelector = ">>> [data-role='all']";
  const accept = await page.waitForSelector(acceptBtnSelector);
  console.log( accept );
  await accept.click();

  console.log(await page.cookies());

  await browser.close();
})();
