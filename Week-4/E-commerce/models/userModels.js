import {Schema ,model} from 'mongoose';
//define schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
    },
    quantity:{
        type:Number,
        default:1
    }
});
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    cart:{
        type:[cartSchema],
    },
},{
    timestamps:true
});
//create model
export const UserModel=model('user',userSchema);