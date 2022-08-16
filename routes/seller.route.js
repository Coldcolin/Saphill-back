const express = require('express');
const router = express.Router();
const {
    getProductsForSeller,
    createSeller,
    getSellers,
    getSingleSeller,
    // upload,
    addProduct,
    login,
    uploads
} = require("../controllers/sellers.controller")

router.get("/Product/:id", getProductsForSeller);
router.post("/Create", uploads, createSeller);
router.get("/all", getSellers);
router.get("/one/:id", getSingleSeller);
router.post("/create/:id/:catId", uploads, addProduct);

module.exports = router