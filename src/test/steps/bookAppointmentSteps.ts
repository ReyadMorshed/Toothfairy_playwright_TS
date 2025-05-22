import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
import HomePage from "../../pages/homePage";
import DoctorPage from "../../pages/doctorPage";
import BookAppointmentPage from "../../pages/bookAppointmentPage";


let homePage: HomePage;
let doctorPage: DoctorPage
let bookAppointmentPage: BookAppointmentPage;
let assert: Assert;
Then('user go to the doctor details page', async function () {
      homePage = new HomePage(fixture.page);
      await homePage.goToDoctorDetailsPage();     
         });

   

Then('user select a date and time slot', async function () {
     doctorPage = new DoctorPage(fixture.page); 
     await doctorPage.clikcOnBookConsultationBtn();
     bookAppointmentPage = new BookAppointmentPage(fixture.page);
     await bookAppointmentPage.selectDate();
     await bookAppointmentPage.selectTimeSlot();
      
         });

   

Then('user click on the procced button', async function () {
     await bookAppointmentPage.clickOnProccedBtn();
     await fixture.page.waitForTimeout(2000); 
         });

   

Then('user click on the cofirm booking button', async function () {
      await bookAppointmentPage.clickOnConfirmBtn();     
         });

   

Then('user should see the booking confirmation message', async function () {
      const msg = await bookAppointmentPage.validateConfirmationMsg();
      assert = new Assert(fixture.page);
      await assert.assertEqual("Booking Confirmed", msg);
         });