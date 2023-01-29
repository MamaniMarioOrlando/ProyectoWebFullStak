module.exports = {
    list : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Lista de Proyectos'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un erro en el envio de la lista!'
            })
        }
    },
    store : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Proyecto guardado!'
            }) 
        } catch (error) {
            return res.status(error.status || 500).json({
                ok:false,
                msg : error.message || 'Ups, ocurrio en problema en STORE!!'
            })
        }
    },
    detail : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : "Detalle se ejecuto correctamente"
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un erro al enviar el DETALLE' 
            })
        }
    },
    update : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Proyecto actualizado correctamente!'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un error al enviar la atualizacion del proyecto!'
            })
        }
    },
    remove : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se elimino correctamente'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un problema al eliminar!'
            })
        }
    },
    addCollaborator : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se añadio colaborador con exito!'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un erro al añadir un colaborador!'
            })
        }
    },
    removeCollaborator : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se elimino correctamente un colaborador!'
            })
        } catch (error) {
            console.log("tipo de error es => ",error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo un error al remover un colaborador!'
            })
        }
    }
}