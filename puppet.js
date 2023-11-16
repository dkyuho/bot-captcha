const puppeteer = require('puppeteer');

let testReCaptcha = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // change depending on prod or dev
    await page.goto('http://localhost:8000/');
    
    // Enter postcode text into the input field
    await page.type('#vehicleLookup-registration-undefined', "1AB2BK");

    // Select the state
    await page.select('#vehicleLookup-state-undefined', 'VIC');

    // Press button
    // Need to make sure button has an id
    await page.click('#buttonTest');
};

testReCaptcha();
