import{test,expect}from'@playwright/test'
test('Window Handling',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone')
    await page.locator('//input[@type="submit"]').click()
    


})