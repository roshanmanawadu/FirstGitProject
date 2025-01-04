/// <reference types="cypress" />

export class ProductPage {
    elements = {
      backpackAddToCartButton: () => cy.get(':nth-child(1) > .pricebar > .btn_primary'),
      backpackRemoveButton: () => cy.get('.btn_secondary'),
      cartButton: () => cy.get(".shopping_cart_link"),
      cartNumber:() => cy.get('.fa-layers-counter'),

    };
  
    cartButtonExists() {
      this.elements.cartButton().should("be.visible");
    }
  
    addBackPackToCart() {
      this.elements.backpackAddToCartButton().click();
    }
  
    verifyBackPackRemoveButtonAppears() {
      this.elements.backpackRemoveButton().should("be.visible");

      
    }
  }