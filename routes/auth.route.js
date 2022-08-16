const express = require('express');
const router = express.Router();
const { getUser, signUp, login, upload, verified, add, addCategory, getAllCat, getAllProducts, getSingleProducts } = require("../controllers/auth.controller.js")

router.get("/", getUser);
router.post("/register", signUp);
router.post("/login", login);
router.post("/add/:id/:catId", verified, upload, add);
router.post("/cat", addCategory);
router.get("/allCat", getAllCat);
router.get("/Products", getAllProducts);
router.get("/Product/:id", getSingleProducts)


module.exports = router