import  Mongoose  from "mongoose";

const userSchema = new Mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    sex:{
        type:String,
        enum:['male','female']
    }
});

export const User= Mongoose.model('USER',userSchema);



