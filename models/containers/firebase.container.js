//Contiene la logica CRUD de la base de datos firebase


const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');       //Se importa el metodo getFireStore
const dbConfig = require('../../DB/db.config');

//admin.initializeApp se sacó de la clase FireBaseContairner porque aparentemente se estaba ejecutando dos veces (imagino que al importar
// el container dos veces en lo dao carritos y productos
admin.initializeApp({
    credential: admin.credential.cert(dbConfig.firebase.credentials)
  })
  console.log("Firebase connected!")


class FirebaseContainer {
  constructor(collection) {
    //FirebaseContainer.connect();                  //se comentó despues de sacar admin.initializeApp 
    const db = getFirestore();
    this.query = db.collection(collection);                 //Recibe el nombre de la coleccion con la que trabajara el CRUD
  }

  /*static connect() {
    admin.initializeApp({
      credential: admin.credential.cert(dbConfig.firebase.credentials)
    })
    console.log("Firebase connected!") */
  

  async getAll() {
    const docRef = await this.query.get();
    const documents = docRef.docs;
    return documents.map(document => {
      return {
        id: document.id,
        ...document.data()
      }
    })
  }

  async getById(id) {
    const docRef = this.query.doc(id);
    if (!docRef) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    const document = await docRef.get();
    return document.data();
  }

  async save(item) {
    const docRef = this.query.doc();
    return await docRef.set(item);
  }

  async update(id, item) {
    const docRef = this.query.doc(id);
    if (!docRef) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return await docRef.update(item);
  }

  async delete(id) {
    const docRef = this.query.doc(id);
    return await docRef.delete();
  }
}

module.exports = FirebaseContainer;