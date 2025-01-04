/// <reference types="cypress" />

describe('sample test', () =>{
    it('Visits the Website and check the header', () =>{

        cy.visit('https://example.cypress.io/');
        cy.title().should('eq', 'Cypress.io: Kitchen Sink');
    });


    it('Visits the Website and check the header fail Scenario', () =>{
    
        cy.visit('https://example.cypress.io/');
        cy.title().should('eq', 'Cypress.io: Kitchen Sink2');
     });    

});