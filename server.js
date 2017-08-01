const http = require('http')

const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require("webpack-dev-middleware")

const app = express()

app.get('/mya', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.send('myamyamyamya')
});

app.use('/', express.static('templates'))
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))))

http.createServer(app)
    .listen(3000, () => {
        console.log('Node app is running on port', 3000)
    })