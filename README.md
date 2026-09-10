QA Automation Challenge

Proyecto de automatización de pruebas E2E y API desarrollado con Cypress.

El proyecto contiene la resolución de:

Automatización E2E – SauceDemo, opción 2.
Automatización de APIs – PetStore, opción 2.
Tecnologías utilizadas
Cypress 16.0.0
Node.js v24.21.0
npm 11.19.0
JavaScript
Microsoft Edge 152
Windows 11
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
│       │
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
├── screenshots/
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
Acceso a Internet para consumir los sitios y APIs bajo prueba.
Instalación

Clonar el repositorio:

git clone URL_DEL_REPOSITORIO


Ingresar al proyecto:

cd qa-automation-challenge


Instalar las dependencias:

npm install


Verificar Cypress:

npx cypress verify

Automatización E2E
Aplicación bajo prueba

SauceDemo:

https://www.saucedemo.com/

Credenciales

Usuario:

standard_user


Password:

secret_sauce

Flujo automatizado

La prueba ejecuta el siguiente flujo:

Acceder a SauceDemo.
Autenticarse con standard_user.
Validar el acceso al catálogo.
Agregar dos productos al carrito.
Visualizar el carrito.
Validar los productos seleccionados.
Iniciar el proceso de checkout.
Completar los datos requeridos.
Finalizar la compra.
Validar el mensaje:
THANK YOU FOR YOUR ORDER

Ejecutar E2E

Ejecución directa con Microsoft Edge:

npx cypress run --browser edge --spec "cypress/e2e/e2e/sauceDemoCheckout.cy.js"


También se puede ejecutar Cypress en modo interactivo:

npm run open

Automatización API
API bajo prueba

PetStore:

https://petstore.swagger.io/


Base URL utilizada:

https://petstore.swagger.io/v2

Casos implementados
TC-API-001 – Crear mascota

Se realiza una petición:

POST /pet


Se valida:

Código HTTP 200.
ID generado.
Nombre de la mascota.
Status available.
TC-API-002 – Consultar mascota por ID

Se realiza:

GET /pet/{petId}


Se valida:

Código HTTP 200.
ID.
Nombre.
Status.
TC-API-003 – Actualizar mascota

Se realiza:

PUT /pet


Se actualizan:

Nombre.
Status a sold.

Se validan los valores retornados.

TC-API-004 – Buscar mascota por status

Se realiza:

GET /pet/findByStatus?status=sold


Se valida que la mascota previamente actualizada se encuentre en los resultados y tenga:

status = sold

Ejecutar pruebas API

Con Microsoft Edge:

npx cypress run --browser edge --spec "cypress/e2e/api/petStore.cy.js"

Ejecutar todas las pruebas

Para ejecutar todos los casos:

npm test


Resultado esperado:

5 passing


Actualmente la ejecución validada contiene:

E2E SauceDemo: 1 passing
API PetStore:   4 passing

Total:          5 passing

Evidencias

Cypress genera videos de las ejecuciones:

cypress/videos/api/petStore.cy.js.mp4
cypress/videos/e2e/sauceDemoCheckout.cy.js.mp4


Estos archivos permiten evidenciar la ejecución automatizada.

Arquitectura

El proyecto utiliza una estructura basada en:

Page Object Model

Los componentes de la aplicación SauceDemo están separados en:

pages/
├── LoginPage.js
├── ProductsPage.js
├── CartPage.js
└── CheckoutPage.js


Esto permite centralizar selectores y acciones de la interfaz y facilita el mantenimiento de las pruebas.

Fixtures

Los datos de prueba se almacenan en:

cypress/fixtures/
├── checkoutData.json
└── petData.json


Esto evita mantener datos de prueba directamente dentro de los casos cuando no es necesario.

API Testing

Las pruebas API utilizan cy.request() de Cypress para ejecutar las solicitudes HTTP y validar:

Status codes.
Response body.
Identificadores.
Valores de negocio.
Datos actualizados.
Resultado de ejecución

Última ejecución completa:

API - PetStore
4 passing

E2E - SauceDemo
1 passing

Total
5 passing
0 failing

Notas

Durante la ejecución con Microsoft Edge, Cypress puede mostrar un warning relacionado con la eliminación de perfiles temporales del navegador (EPERM). Este warning no afecta la ejecución de las pruebas ni el código de salida.

La ejecución validada finalizó correctamente con todos los casos en estado passing.

Autor

QA Automation Challenge