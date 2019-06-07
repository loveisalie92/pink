const express = require('express')
const app = express()
const port = 8081
const bodyParser = require('body-parser')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Đây là api server!'))

app.post('/login', (req, res) => {
    return res.send({
        status: 'ok',
        user:{
            username: req.body.username
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
