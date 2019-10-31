describe('Full functionality test', () => {
  it('Find and click the buttons', () => {
    cy.visit('http://localhost:3000/');
    // Make sure defaults to Unlocked and Open
    // check for green leds first
    cy.contains(/unlocked/i)
      .get('.green-led')
      .should('have.class', 'green-led');
    cy.contains(/open/i)
      .get('.green-led')
      .should('have.class', 'green-led');

    // Make sure lock is initially disabled
    cy.contains(/lock gate/i).should('have.prop', 'disabled');

    // Tests the close button
    cy.contains(/close/i)
      .click()
      .should('have.text', 'Open Gate');

    // Check for Unlocked and Open
    cy.contains(/closed/i).get('.red-led');
    cy.contains(/unlocked/i).get('.green-led');

    // Tests the lock button
    cy.contains('Lock')
      .click()
      .should('have.text', 'Unlock Gate');

    cy.contains('Locked').get('.red-led');
    cy.contains('Closed').get('.red-led');

    // Check to see if open is disabled
    cy.contains('Open').should('have.prop', 'disabled');

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
    cy.contains('Lock').should('have.prop', 'disabled');
  });
});
