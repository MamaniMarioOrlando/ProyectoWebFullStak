const createError= require('http-errors');
const User = require('../dataBase/models/User');
const errorResponse = require('../helpers/errorResponse');
const generadorJWT = require('../helpers/generadorJWT');
const generateToken = require('../helpers/generatorToken');
const { confirmRegister, forgotPassword } = require('../helpers/sendMails');

module.exports = {
    register: async(req, res)=>{
        try{

            const {name,email,password}= req.body;

            if([name,email,password].includes("")){
                throw createError(400,"Todes los campos son obligatorios");
            }

            let user = await User.findOne({
                email
            });
            console.log('El usuario es => ',user);
            if(user){
                    throw createError(400,"El email ya se encuentra registrado");
            }
            // Se crea el usuario con su token
            const token = generateToken(); 

            user=new User(req.body);   
            user.token = token;
            const userStore= await user.save();
            console.log('El usuario es => ',user);

            //enviar el email de confirmacion
            await confirmRegister({
                name: userStore.name,
                email : userStore.email,
                token : userStore.token
            });
            return res.status(201).json({
                ok : true,
                msg : 'Usuario Registrado!',
                data : userStore
            })
        }catch(error){
            return errorResponse(res,error,"REGISTER");
        }
    },
    login: async(req,res)=>{

        try{

            const {email,password}=req.body;

            if([email,password].includes("")){
                throw createError(400,"Todos los campos son obligatorios");
            };

            let user=await User.findOne({
                email
            })

            if(!user){
                throw createError(403,"credenciales incalidas | Email");
            }
            if(!user.checked){
                throw createError(403,"Tu cuenta no ha sido confirmada");
            }

            if(!await user.changePasword(password)){
                throw createError(403,"credenciales invalidas | PASSWORD ");
            }

            return res.status(200).json({
                ok : true,
                msg : 'Usuario logueado!',
                user : {
                    nombre: user.name,
                    email : user.email,
                    token : generadorJWT({
                        id : user_id
                    })
                }
            })
        }catch(error){
            console.log(error);
            return errorResponse(res,error,"LOGIN")
        }
    },
    checked: async(req, res)=>{

        const {token}=req.query  //http://localhost:3000/confirmar

        try {
            

            if(!token){
                throw createError(400, "Token inexistente");
            }
            const user= await User.findOne({
                token
            })

            if(!user){
                throw createError(400,"Token invalido");
            }

            user.checked = true;
            user.token=" ";

            console.log("++++El chekeed",user.checked)
            console.log("++++El token", user.token)

            await user.save();

            return res.status(201).json({
                ok : true,
                msg : 'registro completado existosamente'
            })
        } catch (error) {
            console.log("Este es el error: =>",error);
            return errorResponse(res,error,"CHECKED");
        }
    },
    sendToken : async(req,res)=>{
        const {email}=req.body;
        try {

            let user=await User.findOne({
                email
            })

            if(!user)throw createError(400,"El email no se encuentra registrado!")
            //enviar email para restablecer la contraseña
            const token = generateToken();

            user.token = token;
            await user.save();

            await forgotPassword({
                name : user.name,
                email : user.email,
                token : user.token
            });


            return res.status(200).json({
                ok : true,
                msg : 'Se ha enviado un email con las instrucciones!'
            })
        } catch (error) {
            console.log("Este es el error: => ", error);
            return errorResponse(res,error,"SENT:TOKEN");
        }
    },
    verifyToken : async(req,res)=>{
        try {

            const {token} = req.query;
            
            if( !token )throw createError(400,"No hay token en la peticion!");

            const user = await User.findOne({
                token
            });

            if(!user)throw createError(400,"Token invalido");



            return res.status(200).json({
                ok : true,
                msg : "Token verificado!"
            })
        } catch (error) {
            console.log(error);
            return errorResponse(res,erorr,"VERIFY-TOKEN");
            
        }
    },
    changePasword : async(req,res)=>{
        try {
            const {token} = req.query;
            const {password } = req.body;

            if(!password)throw createError(400,"El password es invalido!!");

            const user = await User.findOne({
                token
            });

            user.password = password;
            user.token = "";

            await save();

            return res.status(200).json({
                ok:true,
                msg : 'Pasdword actualizado!'
            })
        } catch (error) {
            console.log(error);
            return errorResponse(res,erro,"CHANGE-PASSWORD");
        }
    }
}