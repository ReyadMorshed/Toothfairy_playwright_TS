import { expect,Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { assert } from "console";
import { fixture } from "../hooks/pageFixture";

export default class BookAppointmentPage  {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    // Locators
    protected Elements = {

        firstSlot : "//div[@class = 'timeslotslistparent']/div/div/div[1]",
        proccedBtn : "//button[normalize-space()='proceed to book']",
        confirmBtn : "//button[normalize-space()='Confirm Booking']"
        
    }

    // Actions
    async selectDate() {
        
    const currentDate = await this.base.getCurrentDate();
    console.log(currentDate);
    const day = new Date(currentDate).getDate();
    
    await fixture.page.locator(`:has-text("${currentDate}")`).first().click();


    }
    async selectTimeSlot() {
        
        await fixture.page.locator(this.Elements.firstSlot).first().click();
        
    }
    async clickOnProccedBtn() {
        await this.base.waitAndClick(this.Elements.proccedBtn);
        
    }
    async clickOnConfirmBtn() {
        await this.base.waitAndClick(this.Elements.confirmBtn);
        
    }   
}