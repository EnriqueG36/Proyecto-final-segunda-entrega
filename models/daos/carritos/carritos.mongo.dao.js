// data access objet para la coleccion carritos en la db mongo atlas

const { Schema } = require('mongoose');
const MongoContainer = require('../../containers/mongo.container');
const { ProductosDao } = require('../app.daos.js');
const productosDao = new ProductosDao();



const collection = "carritos";                            //coleccion carritos
const carritosSchema = new Schema({                       //squema de mongoose para la coleccion de carritos
  id: { type: Number},
  timeStamp: { type: Date, default: Date.now()},
  productos: { type: Array }
});

class CarritosMongoDao extends MongoContainer {           //carritosMongoDao hereda de la clase MongoContainer
  constructor() {
    super(collection, carritosSchema);
  }
  
  async addProductToCar(idCarrito, idProducto) {

    const buscarProducto = await productosDao.getById(idProducto);
  
    this.model.updateOne({ id: idCarrito }, {
      $push: {
        productos: [buscarProducto]
      }
    })
  } 
}

module.exports = CarritosMongoDao;