import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
import HomePage from "../../pages/homePage";

let homePage: HomePage;
let assert: Assert;
Then('user go to the doctor details page', async function () {
      homePage = new HomePage(fixture.page);
      await homePage.goToDoctorDetailsPage();     
         });

   

Then('user select a date and time slot', async function () {
           
         });

   

Then('user click on the procced button', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   

Then('user click on the cofirm booking button', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   

Then('user should see the booking confirmation message', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });