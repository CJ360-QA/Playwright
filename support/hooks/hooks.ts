import type { Page, Browser, BrowserContext } from "@playwright/test";
import { expect, request, test, chromium, webkit, firefox } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import { Given, When, Then, BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import appConfig from '../../configFile/playwright.json' with { type: 'json' };

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(appConfig.url);

});

Before(async function () {

    await this.page.goto(appConfig.url);

    await this.page.locator('text=Sign In').click();
    await this.page.locator('input[name="email"]').fill(appConfig.username);
    await this.page.locator('input[name="password"]').fill(appConfig.password);
    await this.page.locator('button:has-text("Sign In")').click();

    expect(this.page.title()).toContain('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
});

