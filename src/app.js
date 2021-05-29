
const express = require('express');
const process = require('process');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

 
// Rutas
const main = require('./routers/main');

const products = require('./routers/products');//sin ruta creada, rompe el sitio

// Configuramos la carpeta publica
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method')); //Para usar http put y delete


// Configuramos el motor de vistas
app.set('view engine', 'ejs'); //le indicamos express cual es nuestro temple engine
app.set('views', path.join(__dirname, 'views'));

app.use('/', main);
app.use('/products', products);//sin ruta creada, rompe el sitio

app.listen(process.env.PORT || 3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});
