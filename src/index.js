const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const apiKey = process.env.APIKEY
const moment = require('moment')
const request = require('request')
const supportHours = require('./utils/supportHours')



app.get('/webhooks', (req, res) => {
    const result = supportHours(moment().utcOffset("-05:00"))
    res.send({
        status: result
    })
    request.post(`https://app2.simpletexting.com/v1/send?token=${apiKey}&phone=${req.query.from}&message=${result}`)
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})  