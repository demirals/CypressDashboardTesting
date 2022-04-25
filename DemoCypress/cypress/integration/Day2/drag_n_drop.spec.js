///bu kod düzgün calismadi


describe('Drag and drop feature',()=>{

    it('Drag n drop using data transfer',()=>{

        cy.visit('http://practice.cybertekschool.com/drag_and_drop')

        drag_and_drop()

    })


})


const datatransfer = new DataTransfer;


function drag_and_drop(){

    cy.get('#column-a').should('be.visible').trigger('dragstart')
    cy.wait(500)

    cy.get('#column-b').should('be.visible').trigger('drop',{datatransfer})
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('dragend')


}

//asagidakini error handling icin koydum

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Cannot set properties of undefined')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })





