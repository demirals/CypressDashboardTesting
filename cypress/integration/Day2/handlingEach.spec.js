var information = require('../../fixtures/staging.json')


describe('handling each function',()=>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        cy.get('[name="txtUsername"]').clear().type('Admin')
        cy.get('[name="txtPassword"]').clear().type('admin123')
        cy.get('[class="button"]').click()
    })

    it('Testing each text',()=>{

        cy.get('.quickLinkText').each(($el,index)=>{ //buradaki $el, element hersey olabilir

            cy.log('element : ', $el.text())
            
            const text = $el.text() //bunu yukaridaki staging file icin yapiyoruz

            expect(text).to.contain(information.quickLaunch[index])


        })
    
    })


})