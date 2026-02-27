import { Loginpage } from "../Pages/LoginPOM"
import { test, expect } from '@playwright/test'
import { WelcomeText } from "../Pages/WelcomeText"
test('Login POM', async ({ page }) => {
    const login = new Loginpage(page)
    const textCheck = new WelcomeText(page)

    await login.launchUrl()
    await login.enterUserName()
    await login.enterPassword()
    await login.clickSubmitButton()
    await textCheck.textCheck()
    await textCheck.logOut()




})