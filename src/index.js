const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const moment = require('moment')
const request = require('request')
const supportHours = require('./utils/supportHours')
// const midweekSupport =
// const weekendSupport =



app.get('/webhooks', (req, res) => {
    const result = supportHours(moment().utcOffset("-05:00"))
    res.send({
        from: req.query.from,
         to: req.query.to,
         text: req.query.text,
         reposnse: result

    })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})  