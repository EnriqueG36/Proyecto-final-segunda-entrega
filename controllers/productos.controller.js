const { HTTP_STATUS } = require("../constants/api.constants.js");
const { ProductosDao } = require("../models/daos/app.daos.js");
const { successResponse } = require("../utils/api.utils.js");

const productosDao = new ProductosDao();

class ProductosController {

  async getProductos(req, res, next) {
    try {
      const productos = await productosDao.getAll();
      const response = successResponse(productos);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async getProductoById(req, res, next) {
    const { id } = req.params;
    try {
      const user = await productosDao.getById(id);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async saveProducto(req, res, next) {
    try {
      const newProducto= await productosDao.save(req.body);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async updateProducto(req, res, next) {
    const { id } = req.params;
    try {
      const updateProducto = await productosDao.update(id, req.body);
      const response = successResponse(updateProducto);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

  async deleteProducto(req, res, next) {
    const { id } = req.params;
    try {
      const deletedProducto = await productosDao.delete(id);
      const response = successResponse(deletedProducto);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  }

 
}


module.exports = new ProductosController();