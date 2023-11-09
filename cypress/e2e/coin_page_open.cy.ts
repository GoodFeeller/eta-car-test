describe('Coin page open test', () => {
  it('Page open successful', () => {
    cy.visit('/')
    cy.get('tbody>tr').eq(0).click()
    cy.url().should('include', '/coin/')
  })
})

describe('Popular coin page open test', () => {
  it('Page open successful', () => {
    cy.visit('/')
    cy.get('header>div')
      .eq(1)
      .within(() => {
        cy.get('div>img').eq(0).click()
      })
    cy.url().should('include', '/coin/')
  })
})
