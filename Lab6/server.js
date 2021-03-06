const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors'); 
const app = express();
app.use(cors());

//Se controla el MiddleWare
app.use(bodyParser.urlencoded({ extended: true }))
// Servira para las vistas
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())

//MongoClient para conectarse
const MongoClient = require('mongodb').MongoClient
var db

<<<<<<< HEAD
=======
//Acept Origin Cors
>>>>>>> 5d48c8d99ce1580b57d3492422eefc59a09bf294
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Conexion y se valida para que solamente entre cuando esta sea valida
MongoClient.connect('mongodb://jdcm:lucia65fer52@ds131963.mlab.com:31963/imple-gk', (err, client) => {
    if (err) return console.log(err)
    db = client.db('imple-gk') //db creada
    app.listen(3002, () => {
        console.log('listening on 3002')
    })
})

// GET ALL
app.get('/implementos', (req, res) => {
    //Arreglo que obtiene todo
    db.collection('implementosgk').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      //res.send('index.ejs',{implementosgk: result})
      res.send({implementosgk: result})
    })
  })

// POST
app.post('/implementos', (req, res) => {
    db.collection('implementosgk').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/implementos')
    })
})

// PUT
app.put('/implementos', (req, res) => {
    var id = req.body.id;
    db.collection('implementosgk').findOneAndUpdate({id: id }, {
      $set: {
        nombre: req.body.nombre,
        talla: req.body.talla,
        costo: req.body.costo,
        Descripcion: req.body.Descripcion
      }
    }, {
      sort: {_id: -1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

  //Delete
  app.delete('/implementos', (req, res) => {
    var id = req.body.id;
    db.collection('implementosgk').findOneAndDelete({id: id }, (err, result) => {
        if (err) return res.send(500,err)
        res.send("Se elimino el  registro con Id =  " + id)
      })

  })
