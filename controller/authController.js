module.exports = {
    register: async(req, res)=>{
        try{
            return res.status(201).json({
                ok : true,
                msg : 'Usuario Registrado!'
            })
        }catch(error){
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un error en REGISTER!'
            })
        }
    },
    login: async(req,res)=>{
        try{
            return res.status(200).json({
                ok : true,
                msg : 'Usuario logueado!'
            })
        }catch(error){
            console.log(error);
            return res.status(erro.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hobo un error de LOGIN!'
            })
        }
    },
    checked: async(req, res)=>{
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Usuario checkeado!'
            })
        } catch (error) {
            console.log("Este es el error: =>",error)
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo un erro en CHECKED' 
            })
        }
    },
    sendToken : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Envio de check enviado correctaamente!'
            })
        } catch (error) {
            console.log("Este es el error: => ", error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, Hubo un error en SENCHEKED!'
            });
        }
    },
    verifyToken : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : "Verify enviado!"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'upss, hubo un error en VER-TOKEN'
            })
            
        }
    },
    changePasword : async(req,res)=>{
        try {
            return res.status(200).json({
                ok:true,
                msg : 'Pasdword actualizado!'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss, hubo uno error en CHANGE-PASWORD!'
            })
        }
    }
}