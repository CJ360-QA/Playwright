import type { Page, Locator, APIRequestContext, request } from '@playwright/test';
import { expect } from '@playwright/test';
export class CommonPage {
    page: Page;
    request?: APIRequestContext;
    sampleLocator: Locator;



    constructor(page: Page, request?: APIRequestContext) {
        this.page = page;
        this.request = request;
        this.sampleLocator = page.locator('css=selector');
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
    async getSampleText(): Promise<void> {    
        await this.sampleLocator.textContent() || '';
    }
}