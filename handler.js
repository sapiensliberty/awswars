'use strict';

const listarPersonas = require('./personas/listar.js');
const listarUnaPersona = require('./personas/listar-uno.js');
const crearPersona = require('./personas/crear.js');

const listarPlanetas = require('./planetas/listar.js');
const listarUnPlaneta = require('./planetas/listar-uno.js');
const crearPlaneta = require('./planetas/crear.js');

module.exports.personas = (event, context, callback) => {
  listarPersonas(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(respuesta);
  });
};

module.exports.unapersona = (event, context, callback) => {
  listarUnaPersona(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(respuesta);
  });
};

module.exports.crearpersona = (event, context, callback) => {
  crearPersona(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(respuesta);
  });
};

module.exports.planetas = (event, context, callback) => {
  listarPlanetas(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(respuesta);
  });
};

module.exports.unplaneta = (event, context, callback) => {
  listarUnPlaneta(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(respuesta);
  });
};

module.exports.crearplaneta = (event, context, callback) => {
  crearPlaneta(event, (error, result) => {
    const respuesta = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };

    context.succeed(respuesta);
  });
};
