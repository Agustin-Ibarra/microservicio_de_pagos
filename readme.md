# Mircroservico de pagos
El microservicio fue desarrollado con la finalidad de que las aplicaciones que utilicen la API de stripe, no tengan que crear los archivos de configuracion y los endpoints para realizar los pagos, de este modo, las aplicaciones solo tendran que desarrollar su logica interna, y los pagos seran procesados por este microservicio, el mismo procesa las peticiones a travez de los middlewares, y cuenta con la configuracion para realizar pagos por un producto unico, pagos por varios productos y pagos por subscripcion.
## caracteristicas
1. [Caracteristicas](#caracteristicas)
2. [BackEnd](#backend)
3. [Documentacion](#documentacion)
4. [Pruebas Unitarias](#pruebas-unitarias)
5. [Contenedores Docker](#contenedores-docker)
## Caracteristicas
- Gestiona peticiones desde diferentes aplicaciones para realizar pagos online
- Integración con API de terceros, utiliza los servicios de stripe para realizar pagos online
- Uso de varibles de entorno para el acceso a diferentes servicios y otros usos especificos
- Implementacion de contenedores Docker para ejcutar la aplicacion en entornos aislados
## BackEnd
- Tecnologias: el servidor de este microservicio, esta desarrollado con TypeScript en Node.js con el framework de Express
- La estructura del backend está organizada de la siguiente manera:
```plaintext
backend/
├── source
  ├── controllers/       # Controladores de las rutas
  ├── docs/              # Configuración de swagger y archivo con la documentacion de APIs
  ├── middlewares/       # Middlewares (procesamiento de los datos en las peticiones)
  ├── routes/            # Definición de rutas
  ├── testing/           # archivos de pruebas unitarias
  └── index.ts           # Punto de entrada de la aplicación
```
## Documentacion
- Codigo fuente: el codigo del servidor fue documentado con JSDocs
- APIs: la documentacion de las APIs fure generada con swagger open.io enlace a la documentacion [docs](http://localhost:4242/microservice_payment/documentation)
## Pruebas unitarias
- Testing: las pruebas unitarias estan desrrolladas con la libreria Jest y Supertest
- Iniciar Test: para iniciar los test se ejecuta el siguiente comando
``` bash
npm run test
```
## Contenedores Docker
- La aplicacion utiliza contendores para facilitar el despliegue y ejecutar la aplicacion en entornos aislados
- Para crear un contendor basado en la imagen del proyecto, tiene que estar en la raiz del mismo y ejecutar el siguiente comando
```
docker-compose up payments-service --build
```
- Ejecutar contenedor: para ejecutar el contenedor se ejcuta el siguiente comando
``` bash
docker start payments-service
```
