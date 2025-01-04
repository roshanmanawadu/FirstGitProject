describe('SauceDemo Inventory - Add Random Items to Cart check the count and remove and assert', () => {
    before(() => {
      cy.visit('https://www.saucedemo.com/v1/index.html')
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
      
    })
  
    it('should scroll, add random items to cart, and assert items in cart', () => {
      // Add first item to the cart
      cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
  
      // Scroll down and add another item
      cy.scrollTo('center', 'center', { duration: 1000, easing: 'linear' })
      cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
  
      // Add another item (nth-child(6))
      cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
  
      // Scroll to the top and go to the cart page
      cy.scrollTo('top')
      cy.get('.fa-layers-counter').click()
  
      // Assert the cart page URL & the cart item count
      cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')
      cy.get('.fa-layers-counter').should('have.text', '3') 

      //Remove the item from cart 
      cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()

      // Assert the cart item count
      cy.get('.fa-layers-counter').should('have.text', '2') 

    })
  })
  