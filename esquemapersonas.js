const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({ secret: 'fnAEIe5MCIACDZUAnLENAT3vC_ICGCpmiPhuLwh7' });
const clc="personas";
const idc="idc_personas";

client.query(q.Create(q.Ref("classes"), { name: clc }))
.then(()=>{
  return client.query(
    q.Create(q.Ref("indexes"), {
      name: idc,
      source: q.Ref("classes/"+clc)
    }))
})
.then(console.log.bind(console))
.catch(console.error.bind(console))