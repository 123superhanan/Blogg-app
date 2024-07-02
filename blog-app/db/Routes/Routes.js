import express from "express";
const router = express.Router();


router.route('/').get("gettAllProducts")
router.route('/testing').get("gettAllProductsTesting")

export default router