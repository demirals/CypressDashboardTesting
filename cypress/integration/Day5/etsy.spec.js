var data = require('../../fixtures/etsy.json') 
var career = require('../../fixtures/etsycareers.json')

describe('Etsy test cases',()=>{

    beforeEach('Navigate to page Etsy.com',()=>{
    
        cy.visit("https://www.etsy.com/")
    
    })

it('Login to the etsy',()=>{

    cy.get('[class="wt-text-black"]').each(($el, index)=>{


        const text = $el.text()

        expect(text).to.contains(data.etsy[index])
        

    })


})

it('Navigate to page to Home Favorites',()=>{


//url verification  
//scroll to page to the bottom cy.contains('Muttertagsgeschenke').click({force: true})
//verify Help Center is visible on dom cy.url().should('include','gift-guide-mothers-day-gifts')

    cy.get('[class="wt-btn wt-btn--filled wt-mb-xs-0"]').click()
    cy.scrollTo('bottomLeft')
    cy.contains('Hilfe').should('be.visible')

})

it.only('Navigate to page to Help center',()=>{

    //url verification
    //Scroll to page to the bottom
    //Navigate to page to go to check out
    //Verify the url
    //Go to payment options
    //Verify the payment options is displayed

 //   cy.contains('Hilfe').click({force: true})
    cy.get('[class="wt-btn wt-btn--filled wt-mb-xs-0"]').click()
//    cy.url().should('include','hc')
    cy.scrollTo('bottomLeft')
    cy.contains('Jobs').click()
    cy.url().should('include','careers')
    cy.get('#keywordSearch').clear().type('Engineering')
    
 //   cy.get('.phsSuggestedList_0 > .au-target').click()


    cy.get('#locationInput').clear().type('Br')
    cy.wait(500)
    cy.get('.phs-jobs-category').click()
    cy.get('#ph-search-backdrop').click()

    cy.get('div ul li span a div span').each(($el,index)=>{

    const text = $el.text()

    expect(text).to.contains(career.etsy[index])  //unutma la bunu [index]!!

    cy.get('[class="job-info"]').contains('Engineering')
    
    })

 
 
 


})




})