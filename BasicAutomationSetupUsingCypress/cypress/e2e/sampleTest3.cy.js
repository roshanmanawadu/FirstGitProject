/// <reference types="cypress" />

describe('sample saucedemo user Log in', () =>{
    it('Visits the SWAGLABS and check the Log In', () =>{
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').as('btn').click()
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')

    });

});