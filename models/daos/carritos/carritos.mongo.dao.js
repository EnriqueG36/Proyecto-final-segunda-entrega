// data access objet para la coleccion carritos en la db mongo atlas

const { Schema } = require('mongoose');
const MongoContainer = require('../../containers/mongo.container');

const collection = "carritos";                            //coleccion carritos
const carritosSchema = new Schema({                       //squema de mongoose para la coleccion de carritos
  timeStamp: { type: Date, default: Date.now()},
  productos: { type: Array }
});

class CarritosMongoDao extends MongoContainer {           //carritosMongoDao hereda de la clase MongoContainer
  constructor() {
    super(collection, carritosSchema);
  }
  /*
  async addProductToCar(idCarrito, idProducto) {
  
    this.model.updateOne({ _id: idCarrito }, {
      $push: {
        productos: [idProducto]
      }
    })
  } */
}

module.exports = CarritosMongoDao;