const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'false', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'https://www.777ulotki.pl/';

  await page.goto(url, {waitUntil: 'load'});

  await page.waitForResponse(response =>
    response.url().startsWith("https://cookies-manager.mr.org.pl/api/customer/")
  );

  const cookieAcceptBtn = await page.$("button[data-role='all']");

  // await console.log('The element cookieAcceptBtn was resolved to: ' + cookieAcceptBtn);
  await cookieAcceptBtn.click();  

  console.log(await page.cookies());

  await browser.close();
})();
