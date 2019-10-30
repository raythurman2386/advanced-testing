describe('First Cypress test', () => {
  it('Find and click the buttons', () => {
    cy.visit('http://localhost:3000/');

    // check for green leds first
    cy.get('.green-led');

    // Tests the close button
    cy.contains('Close')
      .click()
      .should('have.text', 'Open Gate')
      // checks to see if the led changed
      .get('.red-led');

    // Tests the lock button
    cy.contains('Lock')
      .click()
      .should('have.text', 'Unlock Gate')
      // checks the led
      .get('.red-led');

    // Unlock and go back to green
    cy.contains('Unlock')
      .click()
      .should('have.text', 'Lock Gate')
      .get('.green-led');

    cy.contains('Open')
      .click()
      .should('have.text', 'Close Gate')
      .get('.green-led');
  });
});
