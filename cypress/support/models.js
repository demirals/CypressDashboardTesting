
import { comparePageUrl, modelSURL } from "./authentication.constant"
var data = require('../fixtures/modelsPage.json')
var comparePage = require('../fixtures/comparePage.json')
export class modelS{

urlVerification(){
    cy.wait(800)
    //cy.get('.tds-align--center > :nth-child(1) > .tds-site-nav-item > .tds-site-nav-item-text').click()
    cy.contains('Model S').click({force: true})  //force:tru ya dikkat
    cy.url().should('eq', modelSURL)
    cy.contains('Model S').should('be.visible')      
  }

privacyPageVerification(){

    cy.scrollTo('bottomLeft')
    cy.get('[class="tds-link tcl-link"]').each(($el,index)=>{


    })
}

modelScomparePage(){

    cy.contains('Compare').click({force: true})
    cy.wait(1000)
    cy.url().should('eq', comparePageUrl)
    cy.scrollTo('bottomLeft')

    cy.get('[class="tds-text--caption tcl-compare-models__item-title"]').each(($el,index)=>{
        const text = $el.text()
        expect(text).to.contain(comparePage.comparePageText[index])

    })


}

}

export const onModelSPage = new modelS