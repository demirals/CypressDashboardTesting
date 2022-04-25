/// <reference types="cypress" />

describe('Webelements', () => {

    //Tag Name
    cy.get('input')

    //by id
    cy.get('#radio1')

    //by class name
    cy.get('.iCheck-helper')

    //by attribute name
    cy.get('[type]')  //dont prefer to use

    //by attribete name and value
    cy.get('[type="radio"]')

    //by class value
    cy.get('[class="iCheck-helper"]')

    //by tagname ant attribute with value
    cy.get('input [name="abuse]')
    cy.get('input #radio1')

    //by two different attributes or more
    cy.get('[name="abuse][class="iCheck-helper"]#yellow')

    cy.contains('Blue').click()








})