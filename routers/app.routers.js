const { Router } = require("express");
const productosRoutes = require('./productos/productos.routes.js');         //rutas para productos
const carritosRoutes = require('./carritos/carritos.routes.js');            //rutas para carritos

const router = Router();

router.use('/productos', productosRoutes);          //Agregamos el prefijo /productos a las rutas incluidas en productsRoutes
router.use('/carrito', carritosRoutes);             //Agregamos el prefijo /carritos a las rutas incluidas en carritosRoutes


module.exports = router;