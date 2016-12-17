/**
 * Clientes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName : 'clientes',
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    nombre : {
      type : 'string',
      size : 45
    },
    app : {
      type : 'string',
      size : 45
    },
    apm : {
      type : 'string',
      size : 45
    },
    nacimiento : {
      type : 'json'
    },
    telefono : {
      type : 'string',
      size : 10
    },
    correo : {
      type: 'string',
    },
    nombre_completo: {
      type: 'string'
    },
    
  },
  beforeCreate: function (values, cb) {
    values.nombre_completo = values.nombre+" "+values.app+" "+values.apm;
    cb();
  }
};
