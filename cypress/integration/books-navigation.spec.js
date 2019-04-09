describe('Books navigation', () => {
  it('Navigates to books page and does a search', () => {
    // Home
    cy.visit(Cypress.env('REACT_DEV_SERVER_URL'));
    cy.contains('Learn React');

    // Navigate to books
    cy.contains('Books').click();
    cy.url().should('include', '/books');

    // Do a search
    cy.get('input').type('game');
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 60);

    // Clean the search
    cy.get('input').clear();
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 0);

    // Do a search
    cy.get('input').type('ender');
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 60);
  });
});
