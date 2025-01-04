/// <reference types="cypress"/>

import { LoginPage } from "../../support/pageObjects/loginPage"
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('Test the Product page', () => {

  let loginPage = new LoginPage();
  let productsPage = new ProductPage();

  it('Add one item to the cart', () => {
    cy.login('standard_user', 'secret_sauce'); 

    productsPage.addBackPackToCart();  
    productsPage.verifyBackPackRemoveButtonAppears();  // Verifies the remove button appears
    productsPage.elements.cartNumber().should('have.text', '1');  // Asserts that cart number is 1
  });

});
