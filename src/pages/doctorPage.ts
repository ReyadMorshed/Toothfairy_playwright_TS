import { expect,Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { assert } from "console";
import { fixture } from "../hooks/pageFixture";

export default class DoctorPage  {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    // Locators
    protected Elements = {

        bookConsultaionBtn : "//div[@class='appttype dp-card ']/button"
        

    }

    // Actions
    async clikcOnBookConsultationBtn() {
        
        await this.base.waitAndClick(this.Elements.bookConsultaionBtn);
        await fixture.page.waitForTimeout(2000);
    }
}