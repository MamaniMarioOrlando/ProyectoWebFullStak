module.exports = {
    list : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Lista enviada correctamente'
            })
        } catch (error) {
            return res.status(error.estatus || 500).json({
                ok : false,
                msg : error.message || 'Ups, hubo en error al LISTAR'
            })
        }
    },
    store : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se guardo el task correctamente'
            })
        } catch (error) {
            return res.status(error.estatus).json({
                ok : false,
                msg : error.message || 'Ups, ocurrio un erro al guarfar el task'
            })
        }
    },
    detail : async( req, res ) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'El detalle del task se envio correctamente!'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, ocurrio un erro al enviar el DETALLE-TASK!'
            })
        }
    },
    update : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se envio correctamente la actualizacion del TASK!'
            })
        } catch (error) {
            return res.status(error.message || 500).json({
                ok : false,
                msg : error.message || 'Ups, ocurio un erro al enviar la actualizacion del TASK!'
            })
        }
    },
    remove : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se elimino correctamente el TASK!'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Ups, ocurrio un error al eliminar el TASK!'
            })
        }
    },
    changeState : async(req,res)=>{
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Se envio en cambio de estado del TASK!'
            })
        } catch (error) {
            return res.status(error.status || 500).json({
                ok : true,
                msg : error.message || 'Ups, ocurrio un erro al enviar el cambio de estado del TASK!'
            })
        }
    },
    
}