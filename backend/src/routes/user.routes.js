import { Router } from "express";
import { submitDetails , getAllUserDetails } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/submitDetails").post(upload.array("images"), submitDetails);

router.route("/admin").get(getAllUserDetails);

export default router;
