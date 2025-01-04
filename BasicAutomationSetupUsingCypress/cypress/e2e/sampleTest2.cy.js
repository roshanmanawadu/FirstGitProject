/// <reference types="cypress" />

describe('sample test', () =>{
    it('Visits the Website and check the header', () =>{

        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('abc@gmail.com')
        cy.get('#password1').focus().type('123456')
        cy.get('#fullName1').type('Full Name')
        cy.wait(50000)
        cy.get('.action-form').submit().should('contain', 'Your form has been submitted!')
    });

   

});