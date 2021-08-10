import {Router} from 'express'
import {getStores,createNewStore,deleteStore } from "../controllers/stores.controller";

const router = Router()

router.get("/stores",getStores);
router.post("/stores",createNewStore);
router.delete("/stores/:id",deleteStore);

export default router