import {Router} from 'express'
import {getCoupons,createNewCoupon, findCouponByEmailAndCode,updateCoupon,deleteUser } from "../controllers/coupons.controller";

const router = Router()
router.get("/coupons",getCoupons);
router.get("/coupons",findCouponByEmailAndCode);
router.post("/coupons",createNewCoupon);
router.patch("/coupons/:id",updateCoupon);
router.delete("/coupons/:id",deleteUser);

export default router