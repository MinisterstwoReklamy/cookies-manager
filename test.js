const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'https://www.777ulotki.pl/';

  await page.goto(url, {waitUntil: 'load'});

  await page.screenshot({path: 'mr-screenshot2.png'});



  await browser.close();
})();
