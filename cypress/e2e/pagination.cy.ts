describe('Pagination test', () => {
  it('Pagination_work', () => {
    cy.visit('/')
    cy.window().scrollTo('bottom')
    cy.get('tbody>tr').should('have.length.gt', 21)
  })
})
