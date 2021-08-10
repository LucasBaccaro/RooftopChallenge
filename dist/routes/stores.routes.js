"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stores_controller_1 = require("../controllers/stores.controller");
var router = express_1.Router();
router.get("/stores", stores_controller_1.getStores);
router.post("/stores", stores_controller_1.createNewStore);
router.delete("/stores/:id", stores_controller_1.deleteStore);
exports.default = router;
