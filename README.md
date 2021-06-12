# awswars
Reto Serverless AWS de Victor Aguilar Villegas
#Comentario N°01
TCS me dejó este reto en una convocatoria de trabajo pero ni se dignaron en responderme el correo.
Y eso que tuve que crearme una cuenta en AWS, agregar mi tarjeta, aprender Lambdas, serverless, instalar múltiples versiones de Nodejs. etc.
Lo único bueno es que aprendí muchas cosas sobre el ecosistema de AWS. Hasta FaunaDB aprendí. Muy buena db no-sql, mucho más versátil que dynamodb.
## Dependencias
FaunaDB 4.2.0

Es necesario crear las colecciones e índices de FaunaDB con 
```bash
node esquemapersonas.js
```
```bash
node esquemaplanetas.js
```

Swapi Node 0.6.0

## Requisitos
Nodejs 12.22.1

Serverless framework 2.39.2

Cuenta en FaunaDB con credenciales activas (aunque se incluye en el código fuente una credencial para probar)
Cuenta en AWS con free tier activa

## Instalación
Usar serverless para [nodejs](https://www.npmjs.com/package/serverless) e instalar con npm.

Luego desplegar en aws con:
```bash
sls deploy --stage dev --verbose
```
## Cliente angular
Probar consumo de API [<<AQUÍ>>](https://sapiensliberty.github.io/ngawswars/)
