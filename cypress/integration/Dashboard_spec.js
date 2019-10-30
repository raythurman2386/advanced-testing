describe('Full functionality test', () => {
  it('Find and click the buttons', () => {
    cy.visit('http://localhost:3000/');
    // Make sure defaults to Unlocked and Open
    // check for green leds first
    cy.contains('Unlocked');
    cy.contains('Open');
    cy.get('.green-led');

    // Make sure lock is initially disabled
    cy.contains('Lock').should('be', 'disabled');

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

    // Check to see if open is disabled
    cy.contains('Open').should('be', 'disabled');

    // Unlock and go back to green
    cy.contains('Unlock')
      .click()
      .should('have.text', 'Lock Gate')
      .get('.green-led');

    cy.contains('Open')
      .click()
      .should('have.text', 'Close Gate')
      .get('.green-led');

    // make sure the button is disabled
    cy.contains('Lock').should('be', 'disabled');
  });
});
