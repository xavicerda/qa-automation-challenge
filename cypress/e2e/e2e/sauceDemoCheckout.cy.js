import LoginPage from '../../../pages/LoginPage';
import ProductsPage from '../../../pages/ProductsPage';
import CartPage from '../../../pages/CartPage';
import CheckoutPage from '../../../pages/CheckoutPage';

describe('E2E - SauceDemo - Flujo de compra', () => {

  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  let checkoutData;

  before(() => {
    cy.fixture('checkoutData').then((data) => {
      checkoutData = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('Debe completar exitosamente el flujo de compra con dos productos', () => {

    // ==========================================
    // 1. AUTENTICACIÓN
    // ==========================================

    loginPage.login(
      checkoutData.username,
      checkoutData.password
    );

    cy.url().should('include', '/inventory.html');


    // ==========================================
    // 2. AGREGAR DOS PRODUCTOS
    // ==========================================

    productsPage.addBackpack();

    productsPage.addBikeLight();

    productsPage.validateProductsAdded(2);


    // ==========================================
    // 3. VISUALIZAR CARRITO
    // ==========================================

    productsPage.clickCart();

    cartPage.validateCartUrl();

    cartPage.validateProduct('Sauce Labs Backpack');

    cartPage.validateProduct('Sauce Labs Bike Light');


    // ==========================================
    // 4. CHECKOUT
    // ==========================================

    cartPage.clickCheckout();

    checkoutPage.enterFirstName(
      checkoutData.firstName
    );

    checkoutPage.enterLastName(
      checkoutData.lastName
    );

    checkoutPage.enterPostalCode(
      checkoutData.postalCode
    );

    checkoutPage.clickContinue();


    // ==========================================
    // 5. FINALIZAR COMPRA
    // ==========================================

    checkoutPage.clickFinish();


    // ==========================================
    // 6. VALIDAR CONFIRMACIÓN
    // ==========================================

    checkoutPage.validateConfirmation();
  });

});