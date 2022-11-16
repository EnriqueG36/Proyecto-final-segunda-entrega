// Data Access Objet para la coleccion productos en la db mongo atlas

const { Schema } = require('mongoose');
const MongoContainer = require('../../containers/mongo.container');

const collection = "productos";                            //coleccion productos
const productosSchema = new Schema({                       //squema de mongoose para la coleccion de productos
  timeStamp: { type: Date, default: Date.now()},
  nombre: { type: String },
  descripcion: { type: String},
  codigo: { type: Number },
  foto: { type: String },
  precio: { type: Number },
  stock: { type: Number }

});

class ProductosMongoDao extends MongoContainer {           //carritosMongoDao hereda de la clase MongoContainer
  constructor() {
    super(collection, productosSchema);
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

module.exports = ProductosMongoDao;