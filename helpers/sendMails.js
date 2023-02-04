 const nodemailer = require('nodemailer');

 const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

 module.exports={
    confirmRegister : async(data)=>{
    //destructurar el nombre email y el token
        const {name,email,token} = data;
        try {
          const infoMail = await transport.sendMail({
            from : "proyect manager <info@projectmanager.com>",
            to : email,
            subject : "confirma tu cuenta",
            text : "confirmá tu cuenta en project manager",
            html : `
            <p>Hola ${name}, hace click en el siguiente enlace <p/>
            <a href="${process.env.URL_FRONTEND}/confirma/${token}"> Confirma tu cuenta</a> 
            `
        })
        console.log(infoMail)
        } catch (error) {
          console.log(error);
        } 
    },
    forgotPassword : async(data)=>{
      const {name,email,token}=data;
      try {
        const infomail = await transport.sendMail({
          form : "proyect manager <info@projectmanager.com>",
          to : email,
          subject : "Restablece tu contraseña",
          text : "Restablece tu contraseña en ProyectManager",
          ///recover-pasword y /confirma/ son tutas del lado del frontend
          html : `
          <p>Hola ${name}, hace click en el siguiente enlace para  <a href="${process.env.URL_FRONTEND}/recover-pasword/${token}"> Rstablecer tu cuenta</a> <p/>
          
          `
        })
      } catch (error) {
        console.log("error de forgotPassword => ",error)
      }
    }
}
