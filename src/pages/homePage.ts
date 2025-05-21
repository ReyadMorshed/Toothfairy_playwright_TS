import { expect,Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { assert } from "console";
import { fixture } from "../hooks/pageFixture";

export default class HomePage  {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    // Locators
    protected Elements = {

        doctorsDropdown : "//li[@class='d-sm-flex']/span[@class='nav-text']",
        doctor : "a[href='/doctors/dr-morshed']"

    }

    // Actions
    async goToDoctorDetailsPage() {
        
        await this.base.waitAndClick(this.Elements.doctorsDropdown);
        //await fixture.page.waitForTimeout(2000);
        await this.base.waitAndClick(this.Elements.doctor);
        await fixture.page.waitForTimeout(5000);
    }
}