const { Router } = require("express");
const productosController = require("../../controllers/productos.controller.js");

const router = Router();

router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductoById);
router.post('/', productosController.saveProducto);
router.put('/:id', productosController.updateProducto);
router.delete('/:id', productosController.deleteProducto);


module.exports = router;

/* Rutas que se piden en el desafio entrega parcial 1:
get / enviar todo el arreglo de productos
get /:id enviar el producto segun el id
post / agregar un producto
put /:id actualizar un producto según su id
delete /:id eliminar un producto según su id
use * ruta comodin que muestre un error
*/