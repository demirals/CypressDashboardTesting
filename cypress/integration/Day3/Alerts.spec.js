

describe('Javascript Alerts Testing',()=>{

    beforeEach('navigate to page cybertekschool.com/javascript_alerts',()=>{
        cy.visit('http://practice.cybertekschool.com/javascript_alerts')
    })

    it('Handling JS Alert - Validate alert text and click ok',()=>{

    //    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click()
       
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm',()=>true)
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    it('Handling JS Confirm - click ok',()=>{
    //    cy.visit('http://practice.cybertekschool.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>true)  //it will hit the ok, what is selected
        cy.get('#result').should('have.text','You clicked: Ok')  
                                
    })

    it('Handling JS Confirm - click cancel',()=>{
    //    cy.visit('http://practice.cybertekschool.com/javascript_alerts')
        
        cy.get('[onclick="jsConfirm()"]').click()
        
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })
        
        cy.on('window:confirm',()=>false)                            //cancel
        cy.get('#result').should('have.text','You clicked: Cancel')  
                                
    })

    it('Handling JS Prompt - input text in prompt, click ok and validate the input text ',()=>{
    //    cy.visit('http://practice.cybertekschool.com/javascript_alerts')
        
        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns('This is a test text')
            cy.get('[onclick="jsPrompt()"]').click()
        })

    cy.get('#result').should('have.text','You entered: This is a test text')  
   
                                
    })
})