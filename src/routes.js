const EmployeeController = require('./Controllers/EmployeeController')

const express = require('express')

const routes = express()


// routes.use('/employees', (req, res) => {
//     console.log(req.body)

//     res.send('ok')
// })

routes.use('/employees', EmployeeController)

module.exports = routes