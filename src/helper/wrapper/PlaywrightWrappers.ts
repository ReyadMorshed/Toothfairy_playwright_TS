import { Page } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) { }

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async fillWithText(locator: string, text: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.fill(text);
    }

    async getCurrentDate(): Promise<string> {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    }).replace(/\s+/g, ' ').trim(); // Removes unwanted spaces or line breaks
}


    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)
        ])
    }

}