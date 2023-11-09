describe('Search test', () => {
  before(() => {
    cy.visit('/')
  })
  beforeEach(() => {
    cy.get('input').focus().type('BTCB')
  })
  it('Successful search', () => {
    cy.get('tbody>tr>td').eq(1).should('contain.text', 'BTCB')
  })
})
