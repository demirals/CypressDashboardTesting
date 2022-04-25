<reference types="cypress" />
//visit

cy.visit('open url')
cy.visit('url',{timeout  :10000})

//should is promise
cy.url().should('include','blablabla')


let path = 'https://google.com'
cy.url().should('include',path)

//finding the element
//loc is the reference
cy.get(loc).click()
cy.get('#spoof-warning').click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative one

cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.length', 3)
cy.get('h1').should('have .text', 'blblblbb')
cy.get('h1').should('have.value','cypress')

//parent to the child

cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()

cy.get(loc).next().click()
cy.go('back')
cy.get(loc).nextAll().click({multiple:true})

for(var i=0; i<=1; i++){
cy.get('tbody tr').nextAll.click({multiple:true})  //click one by one the raws
cy.go('back')
}

cy.get(loc).prev.click()
cy.get(loc).prevAll.click({multiple:true})

//position handling
cy.get(loc).click('top')
cy.get(loc).click('button')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click
cy.get(loc).trigger('mouseup').click

//login
cy.get('#username').clear().type('username')










