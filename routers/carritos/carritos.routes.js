const { Router } = require("express");
const carritosController = require("../../controllers/carritos.controller");

const router = Router();

router.get('/', carritosController.getCarritos);
router.get('/:id', carritosController.getCarritoById);
router.post('/', carritosController.saveCarrito);
router.put('/:id', carritosController.updateCarrito);
router.delete('/:id', carritosController.deleteCarrito);
router.put('/:id/producto', carritosController.addProductoTocart)


module.exports = router;


// REEMPLAZAR TODO ESTO POR CARRITOS