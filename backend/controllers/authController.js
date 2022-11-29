import users from "../model/users.js"

export const register = async(req, res)=>{
    try{
        await users.create(req.body);
        res.status(200).json({"message":"Usuario creado exitosamente"});

    }catch(err){
        res.json({message: err.message});
    }
};

export const deleteUser = async(req, res)=>{
    try{
        const id = req.params.id;
        await users.deleteOne({_id:id}).then(res=>{console.log(res)});
        res.status(200).json({"message":"Usuario eliminado exitosamente"});

    }catch(err){
        res.json({message: err.message});
    }
};

export const getAllUsers = async(req, res)=>{
    try{
        const products = await users.find();
        res.status(200).json(products);

    }catch(err){
        res.json({message: err.message});
    }
};