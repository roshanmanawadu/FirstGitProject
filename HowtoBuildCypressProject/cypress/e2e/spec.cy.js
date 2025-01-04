describe('Sample Demo spec', () => {

  it('Visit Google and Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation for Beginers{Enter}')  
    cy.contains('Videos').click()
    cy.get('#APjFqb').clear().type('Hello World{Enter}')
  })

  
})