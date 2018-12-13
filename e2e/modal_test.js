Feature('Modal')

Scenario('test something', I => {
    I.amOnPage('/')
    I.click('Contact')
    I.see('Modal title')
})
