const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');
const isAuth = require('../middleware/isAuth');

// Customers
router.get('/customers', adminController.getCustomers);
router.get('/customers/:userId', adminController.getCustomer);
router.put('/customers/:userId', adminController.putCustomer);
router.delete('/customers/:userId', adminController.deleteCustomer);

// Products
router.get('/products', adminController.getProducts);
router.get('/products/:productId', adminController.getProduct);
router.post('/products/', adminController.postProduct);
router.put('/products/:productId', adminController.putProduct);
router.delete('/products/:productId', adminController.deleteProduct);

// Rutas vistas mesas para ver si se le carga la pag al mesero o no
router.get('/tables', isAuth, adminController.getTablesView); // next() continua abajo
// CRUD Mesas
router.get('/tables', adminController.getTables);
router.get('/tables/:tableId', adminController.getTable);
router.post('/tables', adminController.postTable);
router.put('/tables/:tableId', adminController.putTable);
router.delete('/tables/:tableId', adminController.deleteTable);

//Recipes
router.get('/recipes/menu', isAuth, adminController.getRecipesMenu);
router.get('/recipes/new', isAuth, adminController.getRecipesView);
router.get('/recipes', adminController.getRecipes);
router.post('/recipes', adminController.postRecipe);
router.put('/recipes/:recipeId',adminController.putRecipe);
router.delete('/recipes/:recipeId',adminController.deleteRecipe);
module.exports = router;