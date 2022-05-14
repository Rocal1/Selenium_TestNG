herokuPage = require ('../../pages/heroku.page')

describe('Scroll to Element', () => {
  it.skip('should scroll to the footer', () => {
   browser.url('/')
   herokuPage.pageHeader.waitForDisplayed()
   herokuPage.scrollToPageFooter()
   assert.equal(true, herokuPage.pageFooter.isDisplayedInViewport())   
   browser.pause(2000)
  })

  it('should scroll into view', () => {
    browser.url('/')
    herokuPage.pageHeader.waitForDisplayed()
    herokuPage.pageFooter.scrollIntoView()
    assert.equal(true, herokuPage.pageFooter.isDisplayedInViewport())   
    browser.pause(2000)
   })
})
