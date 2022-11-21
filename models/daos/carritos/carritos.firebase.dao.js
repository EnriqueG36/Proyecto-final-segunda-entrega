//Data Access Object para productos, en firebase

const FirebaseContainer = require("../../containers/firebase.container.js");
const ProductosFirebaseDao = require ('../productos/productos.firebase.dao');       //Importamos el dao de firebase
const productosFireBaseDao = new ProductosFirebaseDao();

const collection = "carritos";
class ProductsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

  //Este metodo reciebe por reque params el id del carrito al que se añadirá el producto, y por body el "id": del producto presente en la db
  async addProductToCart (idcart, idproduct){

    const {id} = idproduct;

    console.log (idcart, id);
    const buscarProducto = await productosFireBaseDao.getById(id);        //Obtenemos el producto buscando su id mediante un metodo del dao de productos
    console.log (buscarProducto);
    
    const docRef = this.query.doc(idcart);
    //const document = await docRef.get();
    //return document.data();
    //let objetoCualquiera = document.data();
    //objetoCualquiera.productos = buscarProducto;
    return await docRef.update({productos: buscarProducto});

  }

  /*Este metodo sobreescribe al save() del container, es solo para guardar carritos nuevos en firebase, de modo que en automatico añada el campo productos 
    al momento en que se crea el documento, ya que ese campo tiene que estar presente al momento de añadir un producto 
  */

  async save(item) {
    const docRef = this.query.doc();
    const nuevoItem = {
      productos: []
    }
    return await docRef.set(nuevoItem);
  }


}

module.exports = ProductsFirebaseDao;