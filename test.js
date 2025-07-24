const puppeteer = require('puppeteer'); // nie puppeteer-core, chyba że masz swój Chromium

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Włącz logowanie wszystkich requestów
  page.on('request', req => console.log('REQUEST:', req.url()));
  page.on('response', res => console.log('RESPONSE:', res.url()));

  // Zaczynamy czekanie na konkretny skrypt PRZED wejściem na stronę
  const scriptUrlPattern = /^https:\/\/cookies-manager\.mr\.org\.pl\/api\/customer\/.+/;

  const waitForScript = page.waitForRequest(req =>
    scriptUrlPattern.test(req.url()), { timeout: 30000 }
  );

  await page.goto('https://www.777ulotki.pl/', { waitUntil: 'networkidle2' });

  try {
    await waitForScript;
    console.log('✅ Skrypt cookies-manager został załadowany!');
    console.log( await page.cookies() );
  } catch (err) {
    console.error('❌ Nie udało się załadować skryptu cookies-manager w czasie 30s');
  }


  await browser.close();
})();
