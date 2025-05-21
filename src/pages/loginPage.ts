import { expect,Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { assert } from "console";
import { fixture } from "../hooks/pageFixture";

export default class LoginPage  {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    // Locators
    protected Elements = {

        signInButton : "//button[normalize-space()='Sign In']",
        continueWithEmailButton : "//button[normalize-space()='Continue with Email']",
        emailInput : "//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl mui-1v4ccyo']/input",
        passwordInput : "//input[@id='standard-adornment-password']",
        loginButton : "//button[@class='btnrb classic btnr-primary btnr-hover app_button btnr-md']",
        userDropdown : "//div[@class='userdrop-btn']",
        alert : ".alert-inline.alertt.inline-alert.alert-error"

    }

    // Actions
    async clickSignInButton() {
        await this.base.waitAndClick(this.Elements.signInButton);
        await fixture.page.waitForTimeout(4000);
        await this.base.waitAndClick(this.Elements.continueWithEmailButton);
    }
    async enterEmail(email: string) {
        await this.base.fillWithText(this.Elements.emailInput, email);
    }
    async enterPassword(password: string) {
        await this.base.fillWithText(this.Elements.passwordInput, password);
    }
    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginButton);
    }
    async userDropdownIsVisible() {
        return assert(this.page.locator(this.Elements.userDropdown).isVisible());
    }
    async enterIncorrectEmail(incorrectEmail: string) {
        await this.base.fillWithText(this.Elements.emailInput, incorrectEmail);
    }
    async validateErrorMessage() {
        await fixture.page.waitForTimeout(4000);
        const errorMessage = await this.page.locator(".alert-inline.alertt.inline-alert.alert-error").innerText();
        expect(errorMessage).toContain("No patient found with the Email");
        console.log("Error message is displayed: " + errorMessage);
    }

}