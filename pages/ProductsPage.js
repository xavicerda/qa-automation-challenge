class ProductsPage {
  addBackpack() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  addBikeLight() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .click();
  }

  clickCart() {
    cy.get('[data-test="shopping-cart-link"]')
      .click();
  }

  validateProductsAdded(expectedCount) {
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', expectedCount.toString());
  }
}

export default ProductsPage;