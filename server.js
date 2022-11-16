const app = require("./app.js");
const envConfig = require("./config.js");
const PORT = process.env.PORT || 8080;

const DATASOURCE_BY_ENV = {                                             //Declaramos este arreglo que contiene dos rutas a los containers mongo y firebase
    mongo: require('./models/containers/mongo.container.js'),
    firebase: require('./models/containers/firebase.container.js')
};

const dataSource = DATASOURCE_BY_ENV[envConfig.DATASOURCE];             //dataSource adquiere el valor del pequeño arreglo DATASOURCE_BY_ENV

app.listen(PORT, () => {
    dataSource.connect().then(() => {
        console.log(`Server is up and running on port: `, PORT);
        console.log("Connected to " + envConfig.DATASOURCE);
    })
});