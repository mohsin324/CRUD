const table = require('../schema');
const getAllProducts = async (req, res) => {
    const allProducts = await table.findAll();
    return res.status(200).json({ message: 'success', products: allProducts })
}

const getSingleProduct = async (req, res) => {
    console.log(req.url)
    const { idd } = req.params;
    const product = await table.findOne({
        where: {
            id: Number(idd)
        }
    });
    if (!product) {
        return res.status(404).json({ message: 'failure', data: [] });
    }
    return res.status(200).json({ message: 'success', data: product });
}

const addProduct = async(req, res) => {
    const { id } = req.params;
    const { productName, price, storeName } = req.body;
    console.log(req.body);
    console.log(req.url);
    const findProduct = await table.findOne({ where: { id: Number(id)}});
    if(findProduct){
        return res.status(200).json({ message: 'failure', product: 'already exist'});
    }
    // const addInDB = await table.create({productName: productName, price: Number(price), storeName: storeName });
    const addInDB = await table.create(req.body);
    return res.status(200).json({ message: 'success', product: addInDB });
}

const updateProduct = async (req, res) => {
    console.log(req.url);
    const { idd } = req.params;
    const { productName, price, storeName } = req.body;
    console.log(productName)
    const products = await table.findOne({ where: { id: Number(idd) } });
    if (!products) {
        return res.status(400).json({ message: 'failure', data: [] });
    }
    const addProduct = await table.update({ productName, price, storeName }, { where: { id: Number(idd) } });
    return res.status(200).json({ message: 'success', data: addProduct })
}

const deleteProduct = async (req, res) => {
    console.log(req.url);
    const { id } = req.params;
    const { productName, price, storeName } = req.body;
    console.log(productName)
    const products = await table.findOne({ where: { id: Number(id) } });
    if (!products) {
        return res.status(400).json({ message: 'failure', data: [] });
    }
    const deleteProduct = await table.destroy({ where: { id: Number(id) }});
    return res.status(200).json({ message: 'success', data: `${id}` });

}
module.exports = { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct } 