const express = require('express');
const router = express.Router();

const Product = require('../Models/Product')


router.post('/', async (req, res) => {
    try {
        const product = new Product({
            img:req.body.img,
            title:req.body.title,
            rating:req.body.rating,
            prevPrice:req.body.prevPrice,
            newPrice:req.body.newPrice,
            company:req.body.company,
            color:req.body.color,
            category:req.body.category,
            
        }) 
        await product.save()
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({err_msg:err})
    }


});

router.get('/', async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json({err_msg:err})
    }
});

module.exports = router;