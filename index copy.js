const webdriver = require('selenium-webdriver')
async function exapmle() {
    const driver = await new webdriver.Builder()
        .usingServer('http://localhost:9515')
        .withCapabilities({
            'goog:chromeOptions': {
                binary: '/Applications/HalomeSB.app/Contents/MacOS/HalomeSB'
            }
        })
        .forBrowser('chrome')
        .build()

    const phoneInput = await driver.wait(webdriver.until.elementLocated({ id: 'anonymous-input' }))
    await phoneInput.sendKeys('963594847')

    const loginAnoBtn = await driver.wait(webdriver.until.elementLocated({ id: 'anonymous-button-ok' }))
    await loginAnoBtn.click()

    const otp = await driver.wait(webdriver.until.elementLocated({ css: 'input[data-testid="otp-input-0"]'}))
    await otp.sendKeys('000000')
}
exapmle()