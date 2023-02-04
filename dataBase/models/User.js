const mongoose = require('mongoose');
const {hash, compare} =require('bcryptjs')

const userShema =new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        trim : true,
    },
    token: {
        type : String,

    },
    checked : {
        type : Boolean,
        default : false,
    },
},{
    timestamps : true
});

//Antes de guardar se ejecuta el hash de la contraseña
userShema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await hash(this.password,10);
});

userShema.methods.checkedPassword = async function(password){
    return await compare(password, this.password);
}

module.exports = mongoose.model('User', userShema);