require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log("Petición recibida");

  res.status(200).send('<h1>Hola mundo!</h1>');
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})