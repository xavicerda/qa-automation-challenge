INSTRUCCIONES DE EJECUCIÓN
QA AUTOMATION CHALLENGE
REQUISITOS

Instalar previamente:

Node.js
npm
Microsoft Edge
Conexión a Internet

Versiones utilizadas durante la ejecución:

Node.js: v24.21.0
npm: 11.19.0
Cypress: 16.0.0
Microsoft Edge: 152

INSTALACIÓN

Abrir PowerShell o una terminal y ubicarse en la carpeta del proyecto:

cd C:\qa-automation-challenge

Instalar las dependencias:

npm install

Verificar Cypress:

npx cypress verify

EJECUCIÓN E2E

Ejecutar:

npx cypress run --browser edge --spec "cypress/e2e/e2e/sauceDemoCheckout.cy.js"

La prueba realiza:

Login con standard_user.

Agrega dos productos.

Visualiza el carrito.

Completa el formulario de checkout.

Finaliza la compra.

Valida el mensaje "THANK YOU FOR YOUR ORDER".

EJECUCIÓN API

Ejecutar:

npx cypress run --browser edge --spec "cypress/e2e/api/petStore.cy.js"

Se ejecutan cuatro casos:

TC-API-001 - Crear mascota.
TC-API-002 - Consultar mascota por ID.
TC-API-003 - Actualizar nombre y status.
TC-API-004 - Buscar mascota por status.

EJECUCIÓN COMPLETA

Para ejecutar todos los casos:

npm test

Resultado esperado:

5 passing
0 failing

EVIDENCIAS

Los videos generados por Cypress se encuentran en:

cypress/videos/api/petStore.cy.js.mp4

cypress/videos/e2e/sauceDemoCheckout.cy.js.mp4

REPORTES

La carpeta reports está destinada al almacenamiento de reportes generados por la ejecución del proyecto.

ESTRUCTURA PRINCIPAL

cypress/e2e/e2e/
sauceDemoCheckout.cy.js

cypress/e2e/api/
petStore.cy.js

cypress/fixtures/
checkoutData.json
petData.json

pages/
LoginPage.js
ProductsPage.js
CartPage.js
CheckoutPage.js

RESULTADO VALIDADO

E2E SauceDemo: 1 passing

API PetStore: 4 passing

TOTAL: 5 passing
FAILURES: 0

OBSERVACIONES

Cypress puede mostrar un warning EPERM relacionado con la eliminación de perfiles temporales de Microsoft Edge.

Este warning no afecta el resultado de las pruebas.

La última ejecución completa finalizó correctamente con todos los casos en estado PASS.