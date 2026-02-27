import { test , expect} from '@playwright/test'

test('Dropdown UI',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    const SingleDropdown=await page.locator('//select[@id="fruits"]')
    await SingleDropdown .selectOption({index:1}) //.selectOption('Orange') use also this method
    const fruitName = await SingleDropdown.locator('option:checked').textContent()
    console.log('The Fruit is',fruitName)
    //await page.pause();

    const multipleDropdown = await page.locator('//select[@id="superheros"]')
    await multipleDropdown.selectOption([{label:"Ant-Man"},{value:"ca"},{index:7}])
    const multipleHeroes = await multipleDropdown.locator('option:checked').allTextContents()
    console.log('Favourite Heroes are',multipleHeroes)



})