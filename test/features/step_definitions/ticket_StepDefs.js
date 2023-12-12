const { Given, When, Then, AfterAll, setDefaultTimeout, Before, BeforeAll} = require('cucumber');
const { Builder, By, Capabilities, Key, until} = require('selenium-webdriver');
const { expect } = require('chai');
const {postgres} = require("postgres");
const pg = require('pg');
const { Client } = require('pg');
const fs = require('fs');


require("chromedriver");
const chrome = require("selenium-webdriver/ie");
const {TimeoutError} = require("selenium-webdriver/lib/error");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver =  new Builder().withCapabilities(capabilities).build();

const delay = ms => new Promise(res => setTimeout(res, ms));



const sql = fs.readFileSync("test/sql/import.sql").toString();



let client;
BeforeAll(async function(){
    const conString = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}?sslmode=require`;
    console.log(conString)
    client = new pg.Client(conString);
    await client.connect();
})


Before(async function(){
    await client.query(sql);
})

AfterAll(async function(){
    await driver.quit();
    await client.end();
});

Given(/^I am logged in as supplier (\d+)$/, async function (supplierId) {
    await driver.get('http://localhost:3000');

    const element = await driver.findElement(By.css('[data-testid="formSupplierIdInput"]'));

    element.sendKeys(supplierId,Key.RETURN);
});
When(/^I click on Pending tickets$/, async function () {
    // await delay(3000)
    // await driver.executeScript(`document.querySelector('[data-testid="pendingTab"]').click()`)
    // const tabVisibleTest = await driver.wait(until.elementIsVisible(By.css('[data-testid="pendingTab"]')));

    await delay(3000)

    let tab = await driver.wait(until.elementLocated(By.css('[data-testid="pendingTab"]')),2000);
    // driver.moveToElement(tab)
    await tab.click();

});
Then(/^The page should show (\d+) pending tickets$/ ,async function (amount) {
    let rows

        try {
            rows = await driver.executeScript('return document.querySelectorAll("[data-testid=pendingTable] tbody tr")');

        } catch (e) {
            // There are no trs
            rows = [];
        }
       await expect(amount).to.equal(rows.length);
});

When(/^I click on deny ticket with id (\d+)$/, async function (ticketId) {

    let denyBtn = await driver.wait(until.elementLocated(By.css(`[data-testid="denyButton_${ticketId}"]`)));
    await denyBtn.click();
});

Given(/^I click on accept ticket with id (\d+)$/, async function (ticketId) {
    // await delay(2500)
    let acceptBtn = await driver.wait(until.elementLocated(By.css(`[data-testid="acceptButton_${ticketId}"]`)),2000);
    await acceptBtn.click();
});
When(/^I fill in a date$/, async function () {
    await delay(2000)
    const pickupInput = await driver.findElement(By.css('[data-testid="pickupInput"]'));
    pickupInput.sendKeys("02-12-2023");
});
When(/^I click on confirm$/, async function () {
    await delay(2000)
    let confirmAcceptButton = await driver.wait(until.elementLocated(By.css('[data-testid="confirmAcceptButton"]')));
    await confirmAcceptButton.click();

});
When(/^I click on the In Progress tab$/, async function () {
    await delay(2000)

    let tab = await driver.wait(until.elementLocated(By.css('[data-testid="inProgressTab"]')));
    // driver.moveToElement(tab)
    await tab.click();
    await delay(2000)
});
Then(/^The page should show (\d+) in progress tickets$/, async function (amount) {

    await delay(2000)
    let rows

    try {
        rows = await driver.executeScript('return document.querySelectorAll("[data-testid=inProgressTable] tbody tr")');

    } catch (e) {
        // There are no trs
        rows = [];
    }
    await expect(amount).to.equal(rows.length);
});

When(/^I click done ticket with id (\d+)$/, async function (ticketId) {
    await delay(2000)
    let denyBtn = await driver.wait(until.elementLocated(By.css(`[data-testid="doneButton_${ticketId}"]`)));
    await denyBtn.click();
});