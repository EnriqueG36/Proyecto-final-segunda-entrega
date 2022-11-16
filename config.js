
const dotenv = require('dotenv');                           //Importamos dotenv
dotenv.config();                                            //Metodo que carga el archivo .env en process.env

//console.log( {DB_PASSWORD, DATASOURCE})

module.exports = {
    DB_PASSWORD: process.env.DB_PASSWORD,
    DATASOURCE: process.env.DATASOURCE
}