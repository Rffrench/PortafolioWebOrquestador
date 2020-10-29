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
router.get('/inventoryOrders/:userId', isAuth, warehouseController.getInventoryOrdersView);
router.get('/inventoryOrders/new', isAuth, warehouseController.getInventoryOrderForm);
router.get('/inventoryOrders/:userId', warehouseController.getInventoryOrders);
router.get('/inventoryOrder/:orderId', warehouseController.getInventoryOrder);
router.post('/inventoryOrders', warehouseController.postInventoryOrder);

// Order Products
router.get('/order-products', isAuth, warehouseController.getInventoryOrdersView);
router.get('/order-products/:orderId',isAuth,warehouseController.getOrderProducts);
router.put('/order-products/update',warehouseController.putOrderProduct);
router.put('/order-products/:orderId',warehouseController.putOrderStatus);
router.delete('/order-products/:orderId/:productId',warehouseController.deleteOrderProduct);
router.get('/order-products/:orderId', warehouseController.getProducts);
router.post('/order-products/new',warehouseController.postOrderProduct);    


// Products
router.get('/products/menu', isAuth, warehouseController.getProductsMenuView);
router.get('/products',isAuth, warehouseController.getProductsView);
router.get('/products', warehouseController.getProducts);

module.exports = router;