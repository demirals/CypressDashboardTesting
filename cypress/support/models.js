
import { modelSURL } from "./authentication.constant"
var data = require('../fixtures/modelsPage.json')
var comparePage = require('../fixtures/comparePage.json')
export class modelS{

urlVerification(){
    cy.wait(500)
    cy.get('.tds-align--center > :nth-child(1) > .tds-site-nav-item > .tds-site-nav-item-text').click()
    //cy.contains('Model S').click()
    cy.url().should('eq', modelSURL)
    cy.contains('Model S').should('be.visible')      
  }

privacyPageVerification(){

    cy.scrollTo('bottomLeft')
    cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{

        const text = $el.text()
        expect(text).to.contain(data.ModelS[index])


    })
}

}

export const onModelSPage = new modelS