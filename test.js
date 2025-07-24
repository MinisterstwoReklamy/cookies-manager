const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.ministerstworeklamy.pl/');
  console.log(await browser.cookies());

  await browser.close();
})();
