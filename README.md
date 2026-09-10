QA Automation Challenge



Proyecto de automatización de pruebas E2E y API desarrollado con Cypress, como resolución de una prueba técnica para el cargo de QA Automation.



Alcance



El proyecto implementa las siguientes opciones solicitadas en la prueba técnica:



Automatización E2E — Opción 2: flujo de compra en SauceDemo.

Automatización de APIs — Opción 2: gestión de mascotas en PetStore.

Tecnologías utilizadas

Cypress 16.0.0

Node.js 24.21.0

npm 11.19.0

JavaScript

Microsoft Edge 152

Windows 11

Mochawesome

Aplicaciones y APIs bajo prueba

E2E — SauceDemo



Aplicación:



https://www.saucedemo.com/



Credenciales proporcionadas por el ejercicio:



Usuario: standard\_user

Password: secret\_sauce

API — PetStore



Documentación:



https://petstore.swagger.io/



Base URL:



https://petstore.swagger.io/v2



Estructura del proyecto

qa-automation-challenge/

│

├── cypress/

│   ├── e2e/

│   │   ├── api/

│   │   │   └── petStore.cy.js

│   │   │

│   │   └── e2e/

│   │       └── sauceDemoCheckout.cy.js

│   │

│   ├── fixtures/

│   │   ├── checkoutData.json

│   │   └── petData.json

│   │

│   ├── support/

│   │   ├── commands.js

│   │   └── e2e.js

│   │

│   └── videos/

│       ├── api/

│       │   └── petStore.cy.js.mp4

│       └── e2e/

│           └── sauceDemoCheckout.cy.js.mp4

│

├── pages/

│   ├── CartPage.js

│   ├── CheckoutPage.js

│   ├── LoginPage.js

│   └── ProductsPage.js

│

├── reports/

│   ├── assets/

│   ├── merged-report.json

│   ├── mochawesome.json

│   ├── mochawesome\_001.json

│   └── qa-automation-report.html

│

├── cypress.config.js

├── package.json

├── package-lock.json

├── README.md

├── readme.txt

├── conclusiones.txt

└── .gitignore



Requisitos



Para ejecutar el proyecto se requiere:



Node.js instalado.

npm instalado.

Microsoft Edge u otro navegador compatible con Cypress.

Acceso a Internet para consumir las aplicaciones y APIs bajo prueba.

Instalación



Clonar el repositorio:



git clone https://github.com/xavicerda/qa-automation-challenge.git





Ingresar al proyecto:



cd qa-automation-challenge





Instalar dependencias:



npm install





Verificar Cypress:



npx cypress verify



Automatización E2E

Flujo automatizado



La prueba implementa el flujo completo solicitado en la opción 2 de automatización E2E:



Acceder a SauceDemo.

Autenticarse con standard\_user.

Validar el acceso al catálogo.

Agregar dos productos al carrito.

Visualizar el carrito.

Validar los productos seleccionados.

Iniciar el proceso de checkout.

Completar el formulario de compra.

Finalizar la compra.

Validar la confirmación:

THANK YOU FOR YOUR ORDER



Caso de prueba



E2E - SauceDemo - Flujo de compra



Archivo:



cypress/e2e/e2e/sauceDemoCheckout.cy.js



Ejecución E2E



Con Microsoft Edge:



npx cypress run --browser edge --spec "cypress/e2e/e2e/sauceDemoCheckout.cy.js"





Modo interactivo:



npm run open



Automatización API



Las pruebas API utilizan cy.request() de Cypress para ejecutar solicitudes HTTP y validar las respuestas.



Casos implementados

TC-API-001 — Crear mascota



Método:



POST /pet





Validaciones:



HTTP status 200.

ID generado.

Nombre de la mascota.

Status available.

TC-API-002 — Consultar mascota por ID



Método:



GET /pet/{petId}





Validaciones:



HTTP status 200.

ID.

Nombre.

Status.

TC-API-003 — Actualizar mascota



Método:



PUT /pet





Se actualizan:



Nombre.

Status a sold.



Se validan los valores retornados por la API.



TC-API-004 — Buscar mascota por status



Método:



GET /pet/findByStatus?status=sold





Se valida que la mascota previamente actualizada se encuentre dentro de los resultados y tenga:



status = sold



Ejecución API



Con Microsoft Edge:



npx cypress run --browser edge --spec "cypress/e2e/api/petStore.cy.js"



Ejecución completa



Para ejecutar todos los casos:



npm test





Scripts disponibles:



npm run test:e2e

npm run test:api

npm run test:edge

npm run test:e2e:edge

npm run test:api:edge

npm run test:headed

npm run open



Resultado esperado



La última ejecución completa validada obtuvo:



Suite	Casos	Resultado

API - PetStore	4	4 passing

E2E - SauceDemo	1	1 passing

Total	5	5 passing



Resultado final:



5 passing

0 failing

0 pending

0 skipped



Evidencias



Cypress genera videos de las ejecuciones:



cypress/videos/api/petStore.cy.js.mp4

cypress/videos/e2e/sauceDemoCheckout.cy.js.mp4





También se incluye un reporte consolidado de Mochawesome:



reports/qa-automation-report.html





El reporte HTML permite revisar visualmente el resultado de la ejecución de las pruebas.



Arquitectura



El proyecto utiliza Page Object Model (POM) para separar la lógica de interacción con la interfaz de los casos de prueba.



Los componentes principales de SauceDemo están organizados en:



pages/

├── LoginPage.js

├── ProductsPage.js

├── CartPage.js

└── CheckoutPage.js





Esta estructura permite:



Centralizar selectores.

Reutilizar acciones.

Facilitar el mantenimiento.

Mejorar la legibilidad.

Reducir duplicación de código.

Fixtures



Los datos de prueba se almacenan en:



cypress/fixtures/

├── checkoutData.json

└── petData.json





Esto permite separar los datos de prueba de la lógica de automatización y facilita su mantenimiento.



Validaciones API



Las pruebas API validan diferentes aspectos de las respuestas:



HTTP status codes.

Response body.

Identificadores.

Datos enviados.

Datos retornados.

Actualización de información.

Valores de negocio.

Resultados de búsquedas.

Reportes



El proyecto utiliza Mochawesome para generar reportes de ejecución.



Archivos principales:



reports/

├── merged-report.json

├── mochawesome.json

├── mochawesome\_001.json

└── qa-automation-report.html





El reporte HTML consolidado permite revisar los resultados obtenidos durante la ejecución.



Consideraciones



Durante algunas ejecuciones con Microsoft Edge, Cypress puede mostrar un warning relacionado con la eliminación de perfiles temporales del navegador:



EPERM





Este warning no afectó la ejecución de las pruebas ni el código de salida.



Las pruebas fueron ejecutadas exitosamente con todos los casos en estado passing.



Documentación adicional



El repositorio incluye:



readme.txt — instrucciones paso a paso de ejecución.

conclusiones.txt — hallazgos y conclusiones de la automatización.

README.md — documentación general del proyecto.

Repositorio



Repositorio público:



https://github.com/xavicerda/qa-automation-challenge



Autor



Xavier Cerda



QA Automation Challenge

