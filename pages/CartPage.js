class CartPage {
  validateCartUrl() {
    cy.url().should('include', '/cart.html');
  }

  validateProduct(productName) {
    cy.get('.inventory_item_name')
      .contains(productName)
      .should('be.visible');
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]')
      .click();
  }
}

export default CartPage;