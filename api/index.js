const express = require("express")
const app = express()

module.exports = (req, res) => {
    res.send({by: "buddy"})
}

const PORT = process.env.PORT || 5000
app.listen(5000)