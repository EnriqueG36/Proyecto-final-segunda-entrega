//Data Access Object para productos, en firebase

const FirebaseContainer = require("../../containers/firebase.container.js");
const ProductosFirebaseDao = require ('../productos/productos.firebase.dao');       //Importamos el dao de firebase
const productosFireBaseDao = new ProductosFirebaseDao();

const collection = "carritos";
class ProductsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

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

}

module.exports = ProductsFirebaseDao;