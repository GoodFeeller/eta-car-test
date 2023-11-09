describe('Back button on coin page', () => {
  beforeEach(() => {
    cy.visit('/coin/bitcoin')
  })
  it('Back button is working!', () => {
    cy.get('a').contains('Back').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
