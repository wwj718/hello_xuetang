const cors = require('cors');
const express = require('express')
const { exec } = require("child_process");

const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
    res.json({ user: 'tobi' })
})

app.get('/shell', (req, res) => {
    // let req.params
    console.log("query: ",req.query);
    if (req.query.cmd){
        exec(req.query.cmd, (error, data, getter) => {
            if(error){
                console.log("error",error.message);
                return;
            }
            if(getter){
                console.log("data",data);
                return;
            }
            console.log("data",data);
            res.json({ data: data });
        });
    }
    else{
        res.json({ data: null });
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})