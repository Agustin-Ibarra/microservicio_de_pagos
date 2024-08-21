# Mircroservico de pagos online
El microservicio fue desarrollado con la finalidad de que las aplicaciones que utilicen la API de stripe, no tengan que crear los archivos de configuracion y los endpoints para realizar los pagos, de este modo, las aplicaciones solo tendran que desarrollar su logica interna, y los pagos seran procesados por este microservicio, el mismo procesa las peticiones a travez de los middlewares, y cuenta con la configuracion para realizar pagos por un producto unico, pagos por varios productos y pagos por subscripcion.
## caracteristicas
1. [Caracteristicas](#caracteristicas)
2. [BackEnd](#backend)
3. [Documentacion](#documentacion)
## Caracteristicas
- Gestiona peticiones desde diferentes aplicacions para realizar pagos online
- Integración con API de terceros, utiliza los servicios de stripe para realizar pagos online
- implementacion de varibles de entorno para el acceso a diferentes ervicios y otros usos especificos
## BackEnd
- Tecnologias: el servidor de este microservicio, esta desarrollado completamente en TypeScript en Node.js con el framework de express
## Documentacion
- Codigo fuente: el codigo del servidor fue documentado con JSdocs
- APIs: la documentacion de las APIs fure generada con swagger open.io enlace a la documentacion [docs](http://localhost:4242/microservice_payment/documentation)

La estructura del backend está organizada de la siguiente manera:

```plaintext
backend/
│
├── controllers/       # Controladores de las rutas
├── routes/            # Definición de rutas
├── middlewares/       # Middlewares (autenticación, validación, etc.)
├── docs/              # Configuración de swagger y archivo con la documentacion de APIs
├── index.ts           # Punto de entrada de la aplicación
└── package.json       # Dependencias y scripts del backend
