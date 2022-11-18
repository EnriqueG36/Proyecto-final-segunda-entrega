//app.daos es un nombre provisional
//Archivo principal de dao donde se lleva acabo el switcheo entre los diferentes contenedores

const envConfig = require("../../config.js");

let ProductosDao;                           //Obtendra el valor de productos.mongo.dao o productos.firebase.dao
let CarritosDao;                            //Obtendra el valor de carritos.mongo.dao o carritos.firebase.dao

switch(envConfig.DATASOURCE) {                                          //switch ejecutara un caso u otro dependiendo el valor que teenga la variable de entorno DATASOURCE
    case 'mongo':                                                       //en caso de ser mongo
        ProductosDao = require('./productos/productos.mongo.dao.js');    //ProducstDao sera igual al dao de mongo
        CarritosDao = require('./carritos/carritos.mongo.dao.js');      //CarritosDao sera igual al dao de mongo
        break;
   case 'firebase':                                                         //En caso de ser firebase
        ProductosDao = require('./productos/productos.firebase.dao.js');    //ProducstDao sera igual al dao de firebase
        CarritosDao = require('./carritos/carritos.firebase.dao.js');      //CarritosDao sera igual al dao de firebase
        break; 
    default:
        throw new Error("Invalid DATA SOURCE");
}

module.exports = {
    ProductosDao,
    CarritosDao
  }