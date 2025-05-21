import { expect, Page } from "@playwright/test";

export default class Assert {

    constructor(private page: Page) { }

    async assertTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async assertTitleContains(title: string) {
        const pageTitle = await this.page.title();
        expect(pageTitle).toContain(title);
    }

    async assertURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }
    async assertElementIsVisible(locator: string) {
        const element = this.page.locator(locator);
        await expect(element).toBeVisible();
    }

    async assertTrue(condition :  boolean) {
        const result = condition; 
        expect(result).toBe(true);
    }

    async assertURLContains(title: string) {
        const pageURL = this.page.url();
        expect(pageURL).toContain(title);
    }

}