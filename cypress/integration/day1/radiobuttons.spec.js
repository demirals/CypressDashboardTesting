/// <reference types="cypress" />

import {URL} from '../../support/authentication'

describe('Radio Button Tests', () => {

    it('Verify all the radio buttons are checked',()=> {

cy.visit(URL)

cy.get('[type="radio"]').then(radioButtons =>{
    //cy.wrap(radioButtons).first()
    //.check()
    //.should('be.checked')

//cy.click(radioButtons) >> bu calismaz, herbiri icin wrap metoduna ihtiyac var


    for(var i=0; i <= radioButtons.length-1; i++){
        cy.wrap(radioButtons).eq(i)
        .check({force:true})
        .should('be.visible')
        cy.wait(500)
        console.log(i);

    }

})





    })

})