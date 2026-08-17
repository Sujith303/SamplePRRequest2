import {test,expect,Locator} from '@playwright/test';

test("Verify Textbox Actions",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  
  await page.locator("css=#name").fill("sujith");

  await page.waitForTimeout(2000);

});