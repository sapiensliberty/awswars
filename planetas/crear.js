'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
let faunaKey = process.env.FAUNADB_SECRET;
const client = new faunadb.Client({ secret: faunaKey });
const clc='planetas';
const swapi = require('swapi-node');

module.exports = (event, callback) => {
  
  var dataJson;
  const { id } = event.pathParameters;

  swapi.get('https://swapi.dev/api/planets/'+id).then((result) => {
    result['nombre'] = result['name'];
    delete result['name'];
    result['periodo_rotacional'] = result['rotation_period'];
    delete result['rotation_period'];
    result['periodo_orbital'] = result['orbital_period'];
    delete result['orbital_period'];
    result['diametro'] = result['diameter'];
    delete result['diameter'];
    result['clima'] = result['climate'];
    delete result['climate'];
    result['gravedad'] = result['gravity'];
    delete result['gravity'];
    result['terreno'] = result['terrain'];
    delete result['terrain'];
    result['superficie_aquatica'] = result['surface_water'];
    delete result['surface_water'];
    result['poblacion'] = result['population'];
    delete result['population'];
    result['residentes'] = result['residents'];
    delete result['residents'];
    result['peliculas'] = result['films'];
    delete result['films'];
    result['creado'] = result['created'];
    delete result['created'];
    result['editado'] = result['edited'];
    delete result['edited'];
    result['url'] = result['url'];
    delete result['url'];
    dataJson = result;
})
.then((result) => {
  console.log(dataJson);
  var datos = JSON.stringify(dataJson);
  var nuevosDatos = JSON.parse(datos);
   client.query(q.Create(q.Collection(clc), { data : nuevosDatos }))
  .then((response) => {
    console.log("success", response);
    callback(false, response);
  }).catch((error) => {
    console.log("error", error);
    callback(error);
});

})
.catch((error) => {
    console.log("error", error);
    callback(error);
 });

};
