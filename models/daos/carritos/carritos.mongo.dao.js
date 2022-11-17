// data access objet para la coleccion carritos en la db mongo atlas

const { Schema } = require('mongoose');
const MongoContainer = require('../../containers/mongo.container');
const  ProductosMongoDao  = require('../productos/productos.mongo.dao.js');
const productosMongoDao = new ProductosMongoDao();



const collection = "carritos";                            //coleccion carritos
const carritosSchema = new Schema({                       //squema de mongoose para la coleccion de carritos
  id: { type: Number},
  timeStamp: { type: Date, default: Date.now()},
  productos: [{}],
});

class CarritosMongoDao extends MongoContainer {           //carritosMongoDao hereda de la clase MongoContainer
  constructor() {
    super(collection, carritosSchema);
  }
  
  async addProductToCart(idCarrito, idProducto) {         //Metodo para añadir un producto de la bd a un carrito por su id

    console.log(idCarrito, idProducto);

    const { id } = idProducto;

    console.log(id);                                              //Aquí compruebo que esté recibiendo el id del producto

    const buscarProducto = await productosMongoDao.getById(id);

    console.log(buscarProducto);                                  //Aquí se comprueba que sí est'a leyendo el producto de la bd por su id
  
    this.model.updateOne({ id: idCarrito }, {
      $push: {
        productos: [buscarProducto]
      }
    })
  } 
}

module.exports = CarritosMongoDao;