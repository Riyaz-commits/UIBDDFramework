import { Page, chromium, Browser, test, expect } from "@playwright/test";



test("Test case 3 auto completing ",async ({browser})=>

{


    const context = await browser.newContext();
 const page =  await  context.newPage() 
  await page.goto("https://demo.automationtesting.in/AutoComplete.html",{timeout:10000})

  await page.locator("#searchbox").pressSequentially('Ind', { delay: 100 });
  
  await page.getByRole("link",{name:"India"}).click();
  

})


test.describe('@smoke specific viewport block', () => {
  test.use({ viewport: { width: 1600, height: 1200 } });

  test('my test', async ({ page }) => {
    // ...\
    
  //  const context = await browser.newContext();
 //const page =  await  context.newPage() 
  await page.goto("https://demo.automationtesting.in/AutoComplete.html",{timeout:10000})

  await page.locator("#searchbox").pressSequentially('Ind', { delay: 100 });
  });
});


