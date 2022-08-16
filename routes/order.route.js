const express = require('express');
const router = express.Router();
const { addOrder, updateOrder, deleteOrder } = require("../controllers/order.controller");

router.post("/new", addOrder);
router.patch("/change':id", updateOrder);
router.delete("/remove/:id", deleteOrder);


module.exports = router;