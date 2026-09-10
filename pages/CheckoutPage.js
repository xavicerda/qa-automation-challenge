class CheckoutPage {
  enterFirstName(firstName) {
    cy.get('[data-test="firstName"]')
      .clear()
      .type(firstName);
  }

  enterLastName(lastName) {
    cy.get('[data-test="lastName"]')
      .clear()
      .type(lastName);
  }

  enterPostalCode(postalCode) {
    cy.get('[data-test="postalCode"]')
      .clear()
      .type(postalCode);
  }

  clickContinue() {
    cy.get('[data-test="continue"]')
      .click();
  }

  clickFinish() {
    cy.get('[data-test="finish"]')
      .click();
  }

  validateConfirmation() {
    cy.get('[data-test="complete-header"]')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  }
}

export default CheckoutPage;