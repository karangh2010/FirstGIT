export class Loginpage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@type="password"]')
        this.loginButton = page.locator('//button[@name="submit-login"]')
    }
    async launchUrl() {
        await this.page.goto('https://practice.expandtesting.com/login')
    }
    async enterUserName() {
        await this.userName.fill('practice')
    }
    async enterPassword() {
        await this.password.fill('SuperSecretPassword!')
    }
    async clickSubmitButton() {
        await this.loginButton.click()
    }
}