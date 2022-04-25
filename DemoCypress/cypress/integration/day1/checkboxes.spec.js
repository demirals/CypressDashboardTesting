/// <reference types="cypress" />

describe('checkboxes testing', () => {

    it('Checkbox Testing',()=> {

cy.visit('http://practice.cybertekschool.com/checkboxes')

cy.get('#box1').check().should('be.checked')

cy.viewport('iphone-8')

cy.wait(1000)

cy.get('[name="checkbox2"]').click().should('not.be.checked')





    })

})