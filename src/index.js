const routes = require('./routes')

const express = require('express')

const app = express()

app.use(express.json())


// app.use('/employees', (req, res) => {
//     console.log(req.body)

//     res.send('ok')
// })

app.use(routes)

app.listen(8080, () => console.log('Server on port 8080'))