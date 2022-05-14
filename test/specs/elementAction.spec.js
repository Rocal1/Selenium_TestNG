const herokuPage = require("../../pages/heroku.page")

describe('Test element Actions', () => {
  it('should click element', () => {
    browser.url(`${browser.options.baseUrl}`)  
    herokuPage.clickOnLink()
    expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest")
  })

  it('should get Text', () => {
    browser.url(`${browser.options.baseUrl}`)
    expect(herokuPage.getSpecificElementText(1)).equals('A/B Testing')
  })

  it('should click checkbox', () => {
    herokuPage.clickLink(6)  
    herokuPage.clickCheckbox(1)
    expect(herokuPage.checkboxes(1).isSelected()).equals(true)
  })

  it('should uncheck checkbox', () => {
    herokuPage.clickCheckbox(1)
    expect(herokuPage.checkboxes(1).isSelected()).equals(false)
  })

  it('should enter username', () => {
    browser.url(`${browser.options.baseUrl}/login`)
   herokuPage.enterUsername("Rodrigo")   
   assert.equal("Rodrigo", herokuPage.username.getValue(), "[ErrorMessage]");
  })
  
  it('should enter password', () => {
    browser.url(`${browser.options.baseUrl}/login`)
    herokuPage.enterPassword("Password")   
    assert.equal("Password", herokuPage.password.getValue(), "[ErrorMessage]");
   })

   it('should clear the Value', () => {
       herokuPage.username.click()
       herokuPage.username.clearValue()
       assert.equal('', herokuPage.username.getValue());
   })

})
