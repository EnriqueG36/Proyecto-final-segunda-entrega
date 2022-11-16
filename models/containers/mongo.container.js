//Contiene la logica CRUD de la base de datos mongoDB
const mongoose = require('mongoose');                           //Importamos el modulo mongoose
const dbConfig = require('../../DB/db.config.js')               //Importamos el archivocon el objeto de configuración de las db


class MongoContainer {

    constructor (collection, squema) {                          //El constructor recibe el nombre de la coleccion y el squema de mongoose
        this.model = mongoose.model(collection, schema);
    }

    //Metodo para establecer la conexion con mongo atlas
    static async connect() {
        await mongoose.connect(dbConfig.mongodb.uri);           //Recibe la URI de nuestra db en mongo atlas
    }

    //Metodo para terminar la conexion con mongo atlas
    static async disconnect() {
        await mongoose.disconnect();
    }

    //Metodo getAll para leer todos los documentos de la bd
    async getAll(filter = {}) {
        const documents = await this.model.find(filter, {__v: 0}).lean();       
        return documents;
    }

    //Metodo getById para buscar un documento por su id   
    async getById(id) {
        const document = await this.model.findOne({ _id: id }, { __v: 0 });
        if (!document) {
          const message = `Resource with id ${id} does not exist in our records`;
          throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
        }
        return document;
      }

      //Metodo update para actualizar un documento segun su id
      async update(id, item) {
        const updatedDocument = await this.model.updateOne(
          { _id: id },
          { $set: { ...item } }
        );
        if (!updatedDocument.matchedCount) {
          const message = `Resource with id ${id} does not exist in our records`;
          throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
        }
        return updatedDocument;
      }  

    //Metodo para guardar un nuevo documento
    async save(item) {
        const newDocument = new this.model(item);
        return await newDocument.save();
      }

    //Metodo para eliminar un documento por id
    async delete(id) {
        return await this.model.deleteOne({ _id: id });
      }

}

module.exports = MongoContainer;