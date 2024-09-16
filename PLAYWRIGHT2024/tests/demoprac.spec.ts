import { Page, chromium, Browser, test, expect } from "@playwright/test";



test("Test case 2",async ({browser})=>

{
 const context = await browser.newContext();
 const page =  await  context.newPage() 
  await page.goto("https://demo.automationtesting.in/Frames.html",{timeout:10000})

  const frameName =await page.frameLocator('#singleframe').locator(".container>h5").nth(0);
  const frameName1 =await page.frameLocator('#singleframe');
    const frrameName =await  frameName.textContent();
  await console.log("first frame name is "+frrameName)

 await  frameName1.locator("input[type='text']").nth(0).fill("Riyaz Basha Shaik");

 await page.screenshot({ path: 'screenshot123.png' });

})






