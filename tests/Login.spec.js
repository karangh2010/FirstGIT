import{test,expect} from '@playwright/test'

test('Login',async({page})=>{
    await page.goto('https://www.facebook.com/')
    await page.locator('//input[@id="email"]').fill('karanspl20@gmail.com')
    await page.locator('//input[@name="pass"]').fill('FtyfghcvbB@1997')
    await page.locator('//button[@type="submit"]').click()
    // await page.pause();



})