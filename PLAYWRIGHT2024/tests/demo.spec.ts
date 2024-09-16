 import { Page, chromium, Browser, test, expect } from "@playwright/test";
import exp = require("constants");




 test(" @Regression Test case related login functionality", async ({ browser }) =>  {

   const context = await browser.newContext();

const page =  await  context.newPage()

 //   await page.goto("https://demo.automationtesting.in/Register.html",{timeout:10000})
   await page.goto("/Register.html",{timeout:10000})
   const firstName = page.locator("#basicBootstrapForm>div>div>input").nth(0);
   const fullnameLabel = page.locator("#basicBootstrapForm>div>label").nth(0);

  await  firstName.fill("RIyaz Basha")
  
  
 const namelabel =await  fullnameLabel.textContent()
 await console.log("label is "+namelabel)

  await  expect(namelabel).toBe("Full Name* ");

  expect(page.getByRole("heading",{name:"Register"})).toBeVisible();
  console.log("Header is visible ")

  const moviebox = await page.locator("input[value='Movies']")

  await moviebox.check();
  expect(await moviebox.isChecked).toBeTruthy();
  expect(moviebox).toBeChecked();
  await moviebox.uncheck();
  expect(moviebox).not.toBeChecked();
  //await expect(fullnameLabel).toHaveScreenshot("PLAYWRIGHT2024/"+'imawgeRBS1K.png');
  

await page.locator("#countries").click();


/*   await console.log("check box is "+result)
  await expect(result).toBeFalsy() */

/* await page.getByRole("link",{name:"SwitchTo"}).hover();
await page.getByRole("link",{name:"Alerts"}).click();
const alertTitle = await page.locator(".active>a").nth(1).textContent();


console.log("alert title is "+alertTitle)
await expect(alertTitle).toBe("Alert with OK ") */
//await page.on('dialog', dialog => dialog.accept())
//await page.getByRole("button",{name:"    click the button to display an  alert box:"}).click();

const pagetitlename = await page.title();
const urlname = page.url();


 await console.log("page title of current page is "+pagetitlename)
await console.log("url of current page is "+urlname);

/*  Alerts practise
await page.locator("a[href='#CancelTab']").click();
await page.on('dialog', dialog1 => dialog1.dismiss());

await page.getByRole("button",{name:"click the button to display a confirm box "}).click();
const cancelalermesg = await page.locator("#demo").textContent();
await console.log("cancel message is "+cancelalermesg)
await expect( cancelalermesg).toBe("You Pressed Cancel")

await page.on('dialog', dialog => dialog.message()); */

/* wait page.locator("a[href='#Textbox']").click();
  // await   page.on('dialog', dialog1 => dialog1.message());
  await  page.on('dialog', async dialog => {
            console.log('Dialog text:', dialog.message());
            await dialog.accept(); // Fill the alert box
        });
   await page.getByRole("button",{name:"click the button to demonstrate the prompt box "}).click();

   const cancelalermesg = await page.locator("#demo1").textContent();
   await console.log("cancel message is "+cancelalermesg)
   await expect( cancelalermesg).toBe("Hello Automation Testing user How are you today"); */



   await page.locator("#Skills").selectOption("Java");
//await page.locator("#select2-country-container").nth(1).click();
await page.locator("span[role ='combobox']").click();

//await page.getByRole("combobox").click();
await page.locator(".select2-search__field").fill("India");
await page.locator(".select2-search__field").press('Enter');

await page.getByTitle("India").isVisible();

const getText =await page.locator(".select2-selection__rendered").textContent();

await expect(getText).toBe("India");
 // await expect(page).toHaveScreenshot("PLAYWRIGHT2024/"+'imawgeRBS1K.png');



 await page.getByRole("link",{name:"SwitchTo"}).hover();
 await page.getByRole("link",{name:"Windows"}).click();
 await page.getByRole("link",{name:"Open Seperate Multiple Windows"}).click();
 const winTitle = await page.locator(".active>a").nth(1).textContent();

 await console.log("alert title is "+winTitle)
await expect(winTitle).toBe("Open Seperate Multiple Windows") 
const pagePromise = context.waitForEvent('page');
await page.getByRole("button",{name:"    click   "}).click();




const newPage = await pagePromise;
/* const getstart =await newPage.locator(".row>div>h2").nth(0).textContent();

await expect(getstart).toBe("Getting Started"); */

await newPage.close();

await console.log(newPage.isClosed())

expect(newPage.isClosed()).toBe(true);


  });
  




 