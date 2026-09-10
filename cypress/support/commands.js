Cypress.Commands.add(
  'validateStatusCode',
  (response, expectedStatus) => {
    expect(response.status).to.eq(expectedStatus);
  }
);