"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var coupons_controller_1 = require("../controllers/coupons.controller");
var router = express_1.Router();
router.get("/coupons", coupons_controller_1.getCoupons);
router.get("/coupons", coupons_controller_1.findCouponByEmailAndCode);
router.post("/coupons", coupons_controller_1.createNewCoupon);
router.patch("/coupons/:id", coupons_controller_1.updateCoupon);
router.delete("/coupons/:id", coupons_controller_1.deleteUser);
exports.default = router;
