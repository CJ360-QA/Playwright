import { type Page, type APIRequestContext, expect } from '@playwright/test';
import { CommonPage } from './CommpnPage.ts';

export class ChildPage extends CommonPage {

    constructor(page: Page, request?: APIRequestContext) {
        super(page, request);
    }


    async ApiGetExample() {
        if (!this.request) return;
        const response = await this.request.get('https://example.com');
        const responseText = await response.text();
        const status = await response.status();
    }

    async ApiPostExample() {
        const response=await this.request?.post('https://example.com', {
            headers: {
                "authorization": 'Bearer token'
            },
            data: {
                key: 'value'
            }
        });
        const responseText=await response?.text();
        const status=await response?.status();

        expect(status).toBe(200);
        expect(status).toBeGreaterThanOrEqual(200);
        expect(responseText).toContain('Example Domain');
        expect(responseText).not.toBeNull();
        expect(responseText).toEqual("spk");
        const jsonData=await response?.json();
        
    }
}


