var data = require('../../fixtures/etsy.json') 

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
    //scroll to page to the bottom
    //verify Help Center is visible on dom

})

it('Navigate to page to Help center',()=>{

    //url verification
    //Scroll to page to the bottom
    //Navigate to page to go to help center
    //Verify the url
    //Go to payment options
    //Verify the payment options is displayed


})




})