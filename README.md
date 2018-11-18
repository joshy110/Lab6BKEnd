# WebGK
 
El presente proyecto es realizado para conocer sobre las nuevas tecnologías Web que existen acutalmente en el mercado. 
Por ello se realizó un proyecto CRUD en el cual se utilizara el FrameWork React junto a NodeJs y Mongo (utilizando mLab). A su vez
se conecto con la nube AWS en donde se subieron las imágenes Docker para poder tenerlo todo en ese entorno y comprender el uso 
de una nube.

Por inconvenientes con mi versión de windows utilice Ubuntu 14.0 para realizar y terminar el proyecto.

En este apartado se comentara sobre el BackEnd realizado. En el cual se hizo uso de Express y Cors para que pudiese funcionar las inserciones de forma local.

La base de datos utilizada es en Mongo pero se replica en la nube para lo cual se utilizo mLab en donde se tiene montada la misma.

## Comenzando 🚀

A continuación se presenta se detalla lo realizado en este proyecto del lado del BackEnd. Cabe aclarar que este repositorio posee varias ramas en la cual la Master es la mas actualizada y se uso de referencia esta para realizar el presente documento.

### Pre-requisitos 📋

- NodeJs (en windows es posible descargar e instalar, en ubuntu el comando es _sudo apt-get install nodejs_ y _sudo apt-get install npm_
- Docker (se debe tener un conocimiento básico)
- Express
- Cors
- Sistema Operativo Windows 10 pro en adelante, Ubuntu 14.0 en adelante)
- RAM 4G en adelante
- Procesador Core i5 de preferencia
- Conexión a Internet
- Paciencia
- De preferencia un entorno para visualizar textos como Sublime o VisualStudioCode.
- Si utilizó Windows descargar GitBash para hacer push y pull a git

### Instalación 🔧

El proceso de instalación es el sigueinte: 

_1. Instalar NodeJs_

```
$ sudo apt-get install nodejs
```

_2. Instalar Npm (tuve que instalarlos por separado)_

```
$ sudo apt-get install npm
```

_3. Se creo un archivo llamado server.js_

```
Este archivo contiene todaas las funciones CRUD asi como la conexión a la Base de Datos.
```

_4. Se instala Mongo en la maquina que se esta utilizando_

- _Se instala Mongo en la maquina que se esta utilizando_

```
npm install mongodb --save
```

- _Se coloca la conexion hacia Mongo usando MongoClient_
- _Se realiza la configuracion para la base de datos en Mlab_
    - _Seleccionar el proveedor de Nube (AWS)_
    - _Usar SandoBox como tipo de base de datos_
    - _Colcarle el nombre a la base de datos_
    - _Crear un usuario del cual se deben de recordar del usuario y contraseña_
    - _Copiar el Link en el apartado que diche "your-mongo-url"_

```
var db

MongoClient.connect('your-mongodb-url', (err, client) => {
  if (err) return console.log(err)
  db = client.db('lista') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3002')
  })
})
```
    
_5. Luego se agregan las funciones GetAll, Put, Delete_

```
app.get('/nombre de la direccion', (req, res) => {
  var cursor = db.collection('lista').find()
})

app.post('/nombre de la direccion/id:?', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.put('/nombre de la direccion/id:?', (req, res) => {
  // Handle put request
})

app.delete('/nombre de la direccion/id:?', (req, res) => {
  // Handle delete event here
})
```

_6. Luego se agrego el CORS para que se pudiesen realizar las funciones credas anteriormente._

```
npm install cors
```
- _Se usan los cors en el documento_
```
app.use(cors())
```

- _Se habilitan los cors_
```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
```

_7. Luego se prueba utilizando PostMan para valdiar que las funciones creadas hagan lo que deban de hacer._

_8. Luego se creo la lógica de la conexión web a utilizar con nginx para que este fuera el que tuviese el puerto a utilizar._

_9. Fue necesaria la creación de un DockerFile el cual contuviese las instrucciones de los componentes que la imágen debe de tener._

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [MLab](https://mlab.com/) - MLab nube donde se encuentra Mongo
* [NodeJs](https://nodejs.org/en/) - Server
* [MongoDB](https://www.mongodb.com/) - Entorno que posee la base de datos Mongo
* [PostMan](https://www.getpostman.com/) - Entorno las pruebas en PostMan
* [Docker](https://www.docker.com/) - Entorno usado para crear imagenes y contendores
* [AWS](https://aws.amazon.com/) - Entorno Web donde se montaron las imagenes creadas


## Autores ✒️

* **Josué David Cabrera Morales** - *Todo el Desarollo del BackEnd y FrontEnd* - [joshy110](https://github.com/joshy110)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
