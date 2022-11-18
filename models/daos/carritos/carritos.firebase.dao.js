//Data Access Object para productos, en firebase

const FirebaseContainer = require("../../containers/firebase.container.js");

const collection = "carritos";
class ProductsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }
}

module.exports = ProductsFirebaseDao;