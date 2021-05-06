'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
let faunaKey = process.env.FAUNADB_SECRET;
const client = new faunadb.Client({ secret: faunaKey });
const clc='personas';
const swapi = require('swapi-node');

module.exports = (event, callback) => {
  
  var dataJson;
  const { id } = event.pathParameters;

  swapi.getPerson(id).then((result) => {
    result['nombre'] = result['name'];
    delete result['name'];
    result['altura'] = result['height'];
    delete result['height'];
    result['peso'] = result['mass'];
    delete result['mass'];
    result['color_cabello'] = result['hair_color'];
    delete result['hair_color'];
    result['color_piel'] = result['skin_color'];
    delete result['skin_color'];
    result['color_ojos'] = result['eye_color'];
    delete result['eye_color'];
    result['nacimiento'] = result['birth_year'];
    delete result['birth_year'];
    result['genero'] = result['gender'];
    delete result['gender'];
    result['mundo_natal'] = result['homeworld'];
    delete result['homeworld'];
    result['peliculas'] = result['films'];
    delete result['films'];
    result['especies'] = result['species'];
    delete result['species'];
    result['vehiculos'] = result['vehicles'];
    delete result['vehicles'];
    result['naves'] = result['starships'];
    delete result['starships'];
    result['creado'] = result['created'];
    delete result['created'];
    result['editado'] = result['edited'];
    delete result['edited'];
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
