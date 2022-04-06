

describe('Login Page Smoke Test',()=>{

    it('Wrong username right password negative testing', ()=>{
        cy.negativ_password_testing()
    })

    it('Wrong password right username negative testing', ()=>{
        cy.negativ_username_testing()
    })

    it('Wrong password and username negative testing', ()=>{
        cy.negativ_username_password_testing()
    })

})