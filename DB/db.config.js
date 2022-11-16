//Objeto con las configuraciones para cada base de datos
const ENVconfig = require('../config.js');
//const firebaseConfig = require ('../');



module.exports = {
    mongodb: {
        uri: `mongodb+srv://enrique:${ENVconfig}@clustercoder.ijswitn.mongodb.net/?retryWrites=true&w=majority`
    }
}

//la contraseña se pasa DB_PASSWORD=lacontraseña npm start
//si da problemas, entonces hardcodear el password poruqe puede variar en windows

//Se usará como primera opción el dotenv