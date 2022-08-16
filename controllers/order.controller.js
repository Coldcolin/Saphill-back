const Order = require("../models/Order");

const addOrder = async (req, res, next)=>{
    try{
        const newOrder = await Order.create({
            name: req.body.name,
            Address: req.body.Address,
            products: req.body.products,
            Gross: req.body.Gross,
            phone: req.body.phone
        });
        res.json(200).json({newOrder});
    }catch(err){
        next(err)
    }
};

const updateOrder = async (req, res)=>{
    try {
    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
        $set: req.body,
        },
        { new: true }
    );
    res.status(200).json(updatedOrder);
    } catch (err) {
    res.status(500).json(err);
    }
};

const deleteOrder = async (req, res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
    res.status(500).json(err);
    }
};



module.exports = {
    addOrder,
    updateOrder,
    deleteOrder
}