const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

//Crear el servidor
const app = express();
const port = 4000;

//Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/consulta',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar routing
app.use('/', routes());

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Servidor funcionando en localhost:4000`))