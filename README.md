# awswars
Reto Serverless AWS de Victor Aguilar Villegas
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
Probar consumo de API en [<<AQUÍ>>](https://sapiensliberty.github.io/ngawswars/)
## Endpoints
  Obtiene todos los personajes registrados en FaunaDB
  
  GET - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/personas
  
  Obtiene todos los personajes registrado en FaunaDB por  ref id
  
  GET - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/personas/{id}
  
  Registra personaje desde api Swapi por id de Swapi https://swapi.py4e.com/api/people/5 registrando en FaunaDB con keys en español
  
  No es necesario mandar parámetros body registra y traduce automáticamente según id de Swapi ingresado
  
  POST - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/personas/{id}
  
  Obtiene todos los planetas registrados en FaunaDB
  
  GET - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/planetas
  
  Obtiene todos los personajes registrado en FaunaDB por  ref id
  
  GET - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/planetas/{id}
  
  Registra personaje desde api Swapi por id de Swapi https://swapi.py4e.com/api/planets/5 registrando en FaunaDB con keys en español
  
  No es necesario mandar parámetros body registra y traduce automáticamente según id de Swapi ingresado
  
  POST - https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/planetas/{id}
  
  Ejemplo de curl para POST /personas/1
  
  curl --request POST \
  --url https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/personas/6 \
  --header 'Authorization: Bearer undefined' \
  --header 'Content-Type: application/json'
  
  Ejemplo de curl para POST /planetas/1
  
  curl --request POST \
  --url https://463wiphc2h.execute-api.us-east-1.amazonaws.com/dev/planetas/6 \
  --header 'Authorization: Bearer undefined' \
  --header 'Content-Type: application/json'
