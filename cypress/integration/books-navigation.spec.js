/* eslint-disable no-unused-expressions */
describe('Books navigation', () => {
  it('Navigates to books page and does a search', () => {
    // Home
    cy.visit(Cypress.env('REACT_DEV_SERVER_URL'));
    cy.contains('Learn React');

    // Navigate to books
    cy.contains('Books').click();
    cy.url().should('include', '/books');

    // Has 3 checkboxes to select card type.
    // Has BigCard type selected.
    cy.get('input[type=checkbox]').should($checkboxes => {
      expect($checkboxes).to.have.length(3);
      expect($checkboxes.eq(0)).not.to.be.checked;
      expect($checkboxes.eq(1)).not.to.be.checked;
      expect($checkboxes.eq(2)).to.be.checked;
    });

    // Selecting the first checkbox.
    cy.get('[type="checkbox"]')
      .first()
      .check();
    cy.get('input[type=checkbox]').should($checkboxes => {
      expect($checkboxes).to.have.length(3);
      expect($checkboxes.eq(0)).to.be.checked;
      expect($checkboxes.eq(1)).not.to.be.checked;
      expect($checkboxes.eq(2)).not.to.be.checked;
    });

    // Selecting the second checkbox.
    cy.get('[type="checkbox"]')
      .eq(1)
      .check();
    cy.get('input[type=checkbox]').should($checkboxes => {
      expect($checkboxes).to.have.length(3);
      expect($checkboxes.eq(0)).not.to.be.checked;
      expect($checkboxes.eq(1)).to.be.checked;
      expect($checkboxes.eq(2)).not.to.be.checked;
    });

    // Selecting the third checkbox.
    cy.get('[type="checkbox"]')
      .eq(2)
      .check();
    cy.get('input[type=checkbox]').should($checkboxes => {
      expect($checkboxes).to.have.length(3);
      expect($checkboxes.eq(0)).not.to.be.checked;
      expect($checkboxes.eq(1)).not.be.checked;
      expect($checkboxes.eq(2)).to.be.checked;
    });

    // Do a search
    cy.get('input#standard-search').type('game');
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 60);

    // Clean the search
    cy.get('input#standard-search').clear();
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 0);

    // Do a search
    cy.get('input#standard-search').type('ender');
    cy.get('[role="progressbar"]');
    cy.get('.item-list')
      .children()
      .should('have.length', 60);
  });
});
