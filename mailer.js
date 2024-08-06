const nodemailer = require("nodemailer")
require("dotenv").config()
const mySecret = process.env["App_password"]

module.exports = {
    async Getdata(req, res) {
         const { name, mail, message } = req.body
         const ip = req.ip  
         const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587, 
            secure: false,
            auth: {
                user: "rsusane5@gmail.com",
                pass: mySecret,
            },
        })

        try {
            const info = await transporter.sendMail({
                from: mail,
                to: "rsusane5@gmail.com",
                subject: `mensagem de ${name}`,
                text: `Email do remetente: ${mail}.\n 
                 Mensagem: ${message} \n ip: ${ip}`,
            })
            console.log("Message sent: %s", info.messageId)
            return res.status(200).json({
                message: "E-mail enviado com sucesso!",
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao enviar e-mail" })
        }
    },
}
