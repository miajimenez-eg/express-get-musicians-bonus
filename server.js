const express = require("express")
const app = express()
const port = 3000;
const {Musician} = require("./Musician")
const {Band} = require("./Band")
const {Sequelize} = require("./db");
const sequelize = require("sequelize");

app.use(express.json())
app.get('/bands', async (req, res) => {
    const allBands = await Band.findAll({
        include: [{
            model: Musician
        }
        ]
    });

})

app.use(express.json())
app.get('/bands/:id', async (req, res) => {
    let id = req.params.id;
    const getBand = await Band.findByPk(id, {
        include: [{
            model: Musician, where: { bandId: id }
        }]
    })
    res.json(getBand);
})

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})