const express = require('express');
const router = express.Router();

const warehouseController = require('../controllers//warehouseController');
const isAuth = require('../middleware/isAuth');


//Recipes
router.get('/recipes/menu', isAuth, warehouseController.getRecipesMenu);
router.get('/recipes/new', isAuth, warehouseController.getRecipesView);
router.get('/recipes', warehouseController.getRecipes);
router.post('/recipes', warehouseController.postRecipe);
router.put('/recipes/:recipeId',warehouseController.putRecipe);
router.delete('/recipes/:recipeId',warehouseController.deleteRecipe);
module.exports = router;

// Inventory Orders
router.get('/inventoryOrders', isAuth, warehouseController.getInventoryOrdersView);
router.get('/inventoryOrders/:user', warehouseController.getInventoryOrders);
router.get('/inventoryOrder/:order', warehouseController.getInventoryOrder);
router.post('/inventoryOrders', warehouseController.postInventoryOrder);

// Order Products
router.get('/order-products', isAuth, warehouseController.getInventoryOrdersView);
router.get('/order-products/:order',isAuth,warehouseController.getOrderProducts);
router.put('/order-products/update',warehouseController.putOrderProduct);
router.put('/order-products/:order',warehouseController.putOrderStatus);
router.delete('/order-products/:order/:product',warehouseController.deleteOrderProduct);
router.get('/order-products/:order', warehouseController.getProducts);
router.post('/order-products/new',warehouseController.postOrderProduct);    
module.exports = router;