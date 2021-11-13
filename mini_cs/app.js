const cors = require('cors');
const express = require('express')
const app = express()
const hostname = '0.0.0.0'
const port = 3000

app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
    res.json({ user: 'tobi' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})