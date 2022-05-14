const herokuPage = require("../../pages/heroku.page")

describe("Interacting with element", function() {
    it("Get text for element", ()=>{
        browser.url(`${browser.options.baseUrl}`)
        let text = $("//*[@id='page-footer']").getText()
        console.log(text)
        herokuPage.getLiText()
    })

    it("Is Footer Displayed", ()=>{
        console.log(herokuPage.pageFooter.isDisplayed())
    })

    it("Does the header exist?", ()=>{
        console.log(herokuPage.pageHeader.isExisting())
    })

    it("Is footer in viewport?", ()=>{
        console.log(herokuPage.pageFooter.isDisplayedInViewport())
    })

    it("Is subheader enable?", ()=>{
        console.log(herokuPage.subHeading.isEnabled())
    })

    it("Click Element", ()=>{
        herokuPage.clickOnLink()
    })
})