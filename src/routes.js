const express = require('express');
const routes = express.Router();
const ImoveisController = require('../controller/ImoveisController');


routes.get("/imoveis",ImoveisController.list);
routes.post("/imoveis",ImoveisController.store);


module.exports = routes;