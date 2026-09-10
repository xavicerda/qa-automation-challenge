describe('API - PetStore - Gestión de mascotas', () => {

const baseUrl = 'https://petstore.swagger.io/v2';

let petData;

before(() => {
cy.fixture('petData').then((data) => {
petData = data;
});
});

/**

Genera un ID único para evitar colisiones
con mascotas existentes en PetStore.
*/
const generatePetId = () => {
return Date.now();
};

/**

Crea una mascota y devuelve el ID generado.
*/
const createPet = () => {
const id = generatePetId();

return cy.request({
  method: 'POST',
  url: `${baseUrl}/pet`,
  body: {
    id,
    category: petData.category,
    name: petData.name,
    photoUrls: petData.photoUrls,
    tags: petData.tags,
    status: 'available'
  }
}).then((response) => {

  expect(response.status).to.eq(200);

  expect(response.body)
    .to.have.property('id');

  expect(response.body.id)
    .to.eq(id);

  return id;
});


};

it('TC-API-001 - Debe crear una mascota correctamente', () => {

createPet().then((petId) => {

  cy.log(`Mascota creada con ID: ${petId}`);

  cy.request({
    method: 'GET',
    url: `${baseUrl}/pet/${petId}`
  }).then((response) => {

    expect(response.status).to.eq(200);

    expect(response.body.id)
      .to.eq(petId);

    expect(response.body.name)
      .to.eq(petData.name);

    expect(response.body.status)
      .to.eq('available');

  });

});


});

it('TC-API-002 - Debe consultar una mascota por ID', () => {

createPet().then((petId) => {

  cy.request({
    method: 'GET',
    url: `${baseUrl}/pet/${petId}`
  }).then((response) => {

    expect(response.status).to.eq(200);

    expect(response.body)
      .to.have.property('id', petId);

    expect(response.body)
      .to.have.property('name', petData.name);

    expect(response.body)
      .to.have.property('status', 'available');

  });

});


});

it('TC-API-003 - Debe actualizar nombre y status de la mascota', () => {

createPet().then((petId) => {

  cy.request({
    method: 'PUT',
    url: `${baseUrl}/pet`,
    body: {
      id: petId,
      category: petData.category,
      name: petData.updatedName,
      photoUrls: petData.photoUrls,
      tags: petData.tags,
      status: 'sold'
    }
  }).then((response) => {

    expect(response.status).to.eq(200);

    expect(response.body.id)
      .to.eq(petId);

    expect(response.body.name)
      .to.eq(petData.updatedName);

    expect(response.body.status)
      .to.eq('sold');

  });

});


});

it('TC-API-004 - Debe consultar la mascota modificada por status sold', () => {

createPet().then((petId) => {

  cy.request({
    method: 'PUT',
    url: `${baseUrl}/pet`,
    body: {
      id: petId,
      category: petData.category,
      name: petData.updatedName,
      photoUrls: petData.photoUrls,
      tags: petData.tags,
      status: 'sold'
    }
  }).then((updateResponse) => {

    expect(updateResponse.status)
      .to.eq(200);

    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/findByStatus`,
      qs: {
        status: 'sold'
      }
    }).then((response) => {

      expect(response.status)
        .to.eq(200);

      expect(response.body)
        .to.be.an('array');

      const updatedPet = response.body.find(
        (pet) => pet.id === petId
      );

      expect(updatedPet)
        .to.not.be.undefined;

      expect(updatedPet.name)
        .to.eq(petData.updatedName);

      expect(updatedPet.status)
        .to.eq('sold');

    });

  });

});


});

});