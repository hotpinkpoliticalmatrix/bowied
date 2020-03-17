const express = require('express');
const path = require('path');
const volleyball = require('volleyball')
const bodyParser = require('body-parser')

const app = express();

const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./server/api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
