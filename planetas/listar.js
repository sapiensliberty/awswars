'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
let faunaKey = process.env.FAUNADB_SECRET;
const client = new faunadb.Client({ secret: faunaKey });
const idc='idc_planetas';

module.exports = (event, callback) => {
  return client.query(q.Map(q.Paginate(q.Match(q.Index(idc))),q.Lambda(x => q.Get(x))))
  .then((response) => {
    console.log("success", response);
    callback(false, response);
  }).catch((error) => {
    console.log("error", error);
    callback(error)
  })
};
