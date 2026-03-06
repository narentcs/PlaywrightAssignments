import {test,expect} from "@playwright/test"

test("PVR Cinemas Booking",async({page})=>
{

    //2. Navigate to Website

    await page.goto("https://www.pvrcinemas.com/");
    console.log(`The title of the page is ${ await page.title()}`);

    //3. Select the required city.
    await page.locator(`//div[@class="cities-show"]`).click();
    await page.locator(`//input[@placeholder="Search for city"]`).fill("Chennai");
    await page.locator(`//li[@role="option" and text()="Chennai"]`).click();

    //4. Click on the Cinema option.
    const selectedoption=await page.locator(`//span[@class="cinemas-inactive"]`).innerText();
    await page.locator(`//span[@class="cinemas-inactive"]`).click();
    console.log(`Option selected is ${selectedoption}`);

    //5. Click on Select Cinema dropdown.
    await page.locator(`//span[@class="p-dropdown-label p-inputtext p-placeholder" and text()="Select Cinema"]`).click();
   
    //6. Select any available cinema from the list.
    const selectedcinema= await page.getByText("INOX The Marina Mall, OMR, Chennai").innerText();
    await page.getByText("INOX The Marina Mall, OMR, Chennai").click();
    console.log(`Cinema selected is ${selectedcinema}`);

    //7. Select any available date (Today/Tomorrow/Upcoming).
    const selectedday=await page.locator(`//li[@class="p-dropdown-item"]`).nth(1).innerText();
    await page.locator(`//li[@class="p-dropdown-item"]`).nth(1).click();
    console.log(`Day selected is ${selectedday}`);

    //8. Select any available movie from the movie list.
    const selectedmovie=await page.locator(`//li[@class="p-dropdown-item"]`).nth(9).innerText();
    await page.locator(`//li[@class="p-dropdown-item"]`).nth(9).click();
    console.log(`Movie selected is ${selectedmovie}`);

    //9. Select any available show time.
    const selectedtime=await page.locator(`//li[@class="p-dropdown-item"]`).nth(0).innerText();
    await page.locator(`//li[@class="p-dropdown-item"]`).nth(0).click();
    console.log(`Time selected is ${selectedtime}`);

    //10. Click on the Submit button.
    await page.getByRole('button',{name : 'Submit'}).click();

    //12. Accept any additional confirmation popup if displayed.
    await page.getByRole('button',{name : 'Accept'}).click();
    
    //13. Select any available seat from the seating layout.
    const selectseatnumber= await page.locator(`//span[@class="seat-current-pvr"]`).first().innerText();
    await page.locator(`//span[@class="seat-current-pvr"]`).first().click()
    console.log(`Seat # selected is ${selectseatnumber}`);

    //14. Verify the selected seat information is displayed
    const selectedrowwithseatnumber=await page.locator(`//div[@class="seat-number"]`).innerText();
    console.log(`Exact Seat # selected is ${selectedrowwithseatnumber}`);

    //15. Verify the total ticket amount is displayed.
    const totalprice=await page.locator(`//div[@class="grand-prices"]`).innerText();
    console.log(`Price is ${totalprice}`)

    //16. Verify the page title is displayed correctly.
    const pagetitle=await page.title();
    await expect(page).toHaveTitle("PVR Cinemas")
    //await expect(page).toHaveTitle(/Playwright/);
    console.log(`Page title is ${pagetitle}`)
    await page.waitForTimeout(5000);

    //17. Click on the Proceed button
    await page.getByRole('button',{name : 'Proceed'}).click();

    await page.waitForTimeout(3000);

}
)