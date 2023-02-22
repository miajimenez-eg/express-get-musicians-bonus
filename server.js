const express = require("express")
const app = express()
const port = 3000;
const {Musician} = require("./Musician")
const {Band} = require("./Band")
const {Sequelize} = require("./db");
const sequelize = require("sequelize");

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})