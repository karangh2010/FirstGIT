import { expect } from "@playwright/test";
export class WelcomeText {
    constructor(page) {
        this.page = page;
        this.visibleText = page.locator('//h3[@id="username"]')
        this.logout = page.locator('//i[@class="icon-2x icon-signout"]')

    }
    async textCheck() {
        await expect(this.visibleText).toContainText('Hi, practice!')
    }
    async logOut() {
        await this.logout.click()
    }








}