import { User } from "./user.model.mjs";

export const getUsers= async(req,res)=>{

    const users = await User.find();
    res.status(200).json({
        status:'success',
        data:{
            users
        }
    })
}
export const getUser= async(req,res)=>{

    const user = await User.findById(req.params.id);
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
}

export const createUser= async(req,res)=>{

    const user = await User.create(req.body);
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
}

export const updateUser= async(req,res)=>{

    const user = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    });
    res.status(200).json({
        status:'success',
        data:{
            user
        }
    })
}
export const deleteUser= async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status:'success'
       
    })
}
export const deleteAllUsers= async(req,res)=>{

    const user = await User.deleteMany();
    res.status(200).json({
        status:'success'
       
    })
}