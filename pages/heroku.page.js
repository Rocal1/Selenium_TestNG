class Heroku{
    get pageHeader() {return $('h1.heading')}
    get subHeading() {return $('h2')}
    get h3Header() {return $('h3')}
    get pageFooter() {return $('#page-footer')}
    get parent() {return $('ul')}
    get childElements() {return this.parent.$$('li')}
    specificChildElement(index){return this.parent.$(`li:nth-child(${index})`)}
    get firstLink() {return $('ul li:nth-child(1) a')}
    checkboxes(index) {return $(`#checkboxes input:nth-child(${index})`)}
    link(index) {return $(`ul li:nth-child(${index}) a`)}
    get username() {return $('#username')}
    get password() {return $('#password')}
    figures(index) {return $(`.example .figure:nth-child(${index}) img`)}
    figuresDetails(index) {return $(`.example .figure:nth-child(${index}) .figcaption h5`)}
    get target() {return $('.example #target')}
    get result() {return $('.example #result')}

    enterUsername(name){
        this.username.waitForDisplayed()
        this.username.setValue(name)
    }

    enterPassword(name){
        this.password.waitForDisplayed()
        this.password.setValue(name)
    }

    getLiText(){
        this.childElements.filter((element) =>{
            console.log(element.getText())
        })
    }

    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    }

    clickOnLink(){
        if(this.firstLink.isDisplayed()==true){
            this.firstLink.click()
        }
        //browser.pause(5000) 
        this.h3Header.waitForDisplayed() //IMPLICIT WAIT 
    }

    clickCheckbox(index){
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    clickLink(index){
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }
    /**
     * Hovers over the specified image
     * @param {Number} index the specific index of the image 
     */
    hoverOnFigure(index){
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1, 1)

    }

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element 
     */
    getHoverDetailsText(index){
        this.figuresDetails(index).waitForDisplayed()
        return this.figuresDetails(index).getText()
    }

    /**
     * Clicks the target input field
     */
    clickTarget(){
        this.target.waitForDisplayed()
        this.target.click()
    }

    /**
     * Send keys to target 
     */
    sendKeysToTarget(text){
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    /**
     * Return the text result from target input field
     */
    getResultText(){
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    /**
     * Scroll to pageFooter
     */
    scrollToPageFooter(){
        this.pageFooter.moveTo()
    }
}
module.exports = new Heroku()