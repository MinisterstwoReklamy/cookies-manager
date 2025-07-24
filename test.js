import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();

const page = await browser.newPage();

await page.goto('https://www.ministerstworeklamy.pl/');

// In this example, we set a cookie using script evaluation.
// Cookies can be set by the page/server in various ways.
await page.evaluate(() => {
  document.cookie = 'myCookie = MyCookieValue';
});

console.log(await browser.cookies()); // print available cookies.