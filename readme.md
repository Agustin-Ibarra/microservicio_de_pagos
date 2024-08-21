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
- La docuemntacion del codigo del fuente del servidor como las rutas y meddlewares fue escrita con JSDoc, la documentacion de las APIs fue documentada con Swagger open.io
