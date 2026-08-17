import {test,expect,Locator} from '@playwright/test';

test("Verify Textbox Actions",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  await page.locator("css=#name").fill("sujith");

  await page.waitForTimeout(2000);

});

test("Verify Radio buttons",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  const maleradio=page.locator("css=#male");    //Male radio button locator
  await expect(maleradio).toBeVisible();
  await expect(maleradio).toBeEnabled();
  await maleradio.check();                           //select radio button
  await expect(maleradio).toBeChecked();            //verify radio button is selected
  console.log("male radio button is selected");

  await page.waitForTimeout(3000);

});