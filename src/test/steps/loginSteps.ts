import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";

let loginPage : LoginPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2)        
         
         
         
Given('User navigates to the application', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("User navigates to the application");
 
});

   

Given('User click on the sign in button', async function () {
    loginPage = new LoginPage(fixture.page);
    assert = new Assert(fixture.page);
    await loginPage.clickSignInButton();

  });

  

When('User enters valid username and password', async function () {
     await loginPage.enterEmail(process.env.email);
     await loginPage.enterPassword(process.env.password);    
  });

   

When('User click on the login button', async function () {
    await loginPage.clickLoginButton();
           
   });

   

Then('User should be redirected to the home page', async function () {
    await  fixture.page.waitForTimeout(2000);
    const userDropdown = "//div[@class='userdrop-btn']"
    await assert.assertElementIsVisible(userDropdown)
    });

    

 When('User enters invalid username and password', async function () {
       await loginPage.enterIncorrectEmail(process.env.incorrect_email);
       await loginPage.enterPassword(process.env.password);
       await fixture.page.waitForTimeout(4000);
          
});

   

Then('User should see an error message', async function () {
      await loginPage.validateErrorMessage();     
});   