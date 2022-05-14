herokuPage = require('../../pages/heroku.page')


describe('WebDriverIO API Actions', () => {
  it('should hover on figure 1', () => {
   browser.url(`${browser.options.baseUrl}/hovers`)   
   herokuPage.hoverOnFigure(3)
   assert.equal("name: user1", herokuPage.getHoverDetailsText(3))
   //browser.pause(2000)
  })

  it('should hover on figure 2', () => {
    browser.url(`${browser.options.baseUrl}/hovers`)   
    herokuPage.hoverOnFigure(4)
    assert.equal("name: user2", herokuPage.getHoverDetailsText(4))
    //browser.pause(2000)
   })

   it('should hover on figure 3', () => {
    browser.url(`${browser.options.baseUrl}/hovers`)   
    herokuPage.hoverOnFigure(5)
    assert.equal("name: user3", herokuPage.getHoverDetailsText(5))
    //browser.pause(2000)
   })
   
   it('should send keyboard value', () => {
    browser.url(`${browser.options.baseUrl}/key_presses`)
    herokuPage.clickTarget()
    herokuPage.sendKeysToTarget("Backspace") 
    assert.equal("You entered: BACK_SPACE", herokuPage.getResultText());
 })
})
