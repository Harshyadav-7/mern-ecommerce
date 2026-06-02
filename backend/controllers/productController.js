import product from "../models/product.js";

export const createProduct = async (req,res) =>{
    try{
        const newProduct = await product.create(req.body);
        res.json({
            message : 'product created successfully',
            product: newProduct,
        })

    }catch (error){
        console.log(error)
        res.status(500).json({message: "server error", error,
        error: error.message,
        });
    }
}

export const getProduct = async (req, res) =>{
    try{
        const {search, category} = req.query;

        let filter = {};

        if (search) {
            filter.title = {$regex: search, $options: 'i'}
        }

        if (category) {
            filter.category = category;
        }
        const products = await product.find(filter).sort({createdAt: -1});
        res.json(products);
    } catch (error){
        res.status(500).json({message: 'server Error', error});
    }
}


export const updateProduct = async (req,res) =>{
    try{
        const updated = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json({
            message: "product updated successfully",
            updated,
        })
    } catch(error){
        res.status(500).json({message: 'server Error', error});
    }
}


export const deleteProduct = async(req,res)=>{
    try{
        await product.findByIdAndDelete(
            req.params.id
        )
        res.json({message: "product deleted successfully"});
    }catch (error){
        res.status(500).json({message: 'server error', error});
    }
}