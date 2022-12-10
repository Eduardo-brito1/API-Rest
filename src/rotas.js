const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores)
rotas.get('/instrutores/:id', instrutores.obterinstrutor)
rotas.post('/instrutores', instrutores.cadastrarinstrutores)

module.exports = rotas;