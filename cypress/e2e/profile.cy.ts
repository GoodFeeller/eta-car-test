describe('Profile test', () => {
  it('Successful profile show', () => {
    let firstCoin: string
    let secondCoin: string
    cy.visit('/')
    cy.get('tbody>tr>td')
      .eq(1)
      .as('first')
      .parent()
      .within(() => {
        cy.get('button').click()
      })
    cy.get('input[name=Count]').type('1')
    cy.get('button').contains('Buy').click()
    cy.get('tbody>tr')
      .eq(2)
      .within(() => {
        cy.get('td').eq(1).as('second')
        cy.get('button').click()
      })
    cy.get('input[name=Count]').type('1')
    cy.get('button').contains('Buy').click()
    cy.get('header>div').eq(2).click()
    cy.get('@first')
      .then((f) => {
        firstCoin = f.text()
      })
      .then(() => {
        cy.get('@second')
          .then((s) => {
            secondCoin = s.text()
          })
          .then(() => {
            cy.get('#root>div>div>div>div')
              .eq(1)
              .within(() => {
                cy.get('button')
                  .eq(0)
                  .parent()
                  .within(() => {
                    cy.get('span').eq(0).should('contain', firstCoin)
                  })
                cy.get('button')
                  .parent()
                  .eq(1)
                  .within(() => {
                    cy.get('span').eq(0).should('contain', secondCoin)
                  })
              })
          })
      })
  })
})
