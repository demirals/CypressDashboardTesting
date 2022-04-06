import {url,username,password,wrongusername,wrongpassword,loginpageerrormessage} from '../support/authentication.constant'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_positiv_scenarios', () => {

    cy.visit(url)
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(password)
    cy.get('[name="login"]').click()
})

Cypress.Commands.add('negativ_password_testing', () => {

    cy.visit(url)
    
    cy.get('[class="_42ft _4jy0 _9xo7 _4jy3 _4jy1 selected _51sy"]').click()
    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(wrongpassword)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('negativ_username_testing', () => {

    cy.visit(url)
    
    cy.get('[class="_42ft _4jy0 _9xo7 _4jy3 _4jy1 selected _51sy"]').click()
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
})

Cypress.Commands.add('negativ_username_password_testing', () => {

    cy.visit(url)
    
    cy.get('[class="_42ft _4jy0 _9xo7 _4jy3 _4jy1 selected _51sy"]').click()
    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeaderTitle').should('be.visible')
})