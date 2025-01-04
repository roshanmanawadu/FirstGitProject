describe('SauceDemo Inventory - Add Random Items to Cart checkout the cart and assert', () => {
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
  
        
      // Scroll to the top and go to the cart page
      cy.scrollTo('top')
      cy.get('.fa-layers-counter').click()
  
      // Assert the cart page URL & the cart item count
      cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')

      // Checkout and assert

      cy.get('.btn_action').click()
      cy.get('[data-test="firstName"]').type('Roshan')
      cy.get('[data-test="lastName"]').type('Mana')
      cy.get('[data-test="postalCode"]').type('5000')
      cy.get('.btn_primary').click()
      cy.get('.summary_info > :nth-child(2)')
      cy.get('.btn_action').click()
      cy.wait(5000)
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')


    })
  })
  