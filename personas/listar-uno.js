'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
let faunaKey = process.env.FAUNADB_SECRET;
const client = new faunadb.Client({ secret: faunaKey });
const clc='personas';

module.exports = (event, callback) => {
  const { id } = event.pathParameters;
  return client.query(q.Get(q.Ref(q.Collection(clc), id)))
  .then((response) => {
    console.log("success", response);
    callback(false, response);
  }).catch((error) => {
    console.log("error", error);
    callback(error)
  })
};
