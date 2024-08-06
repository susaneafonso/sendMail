const express = require("express")
const sendmail = require("./mailer")

const routes = express.Router()
routes.post("/email", sendmail.Getdata)

module.exports = routes
