const express = require('express');
const instrutores = require('./controladores/instrutores');

const rotas = express();

rotas.get('/instrutores', instrutores.listarInstrutores)//ver a lista de instrutores
rotas.get('/instrutores/:id', instrutores.obterinstrutor)//procurar instrutor pelo id
rotas.post('/instrutores', instrutores.cadastrarinstrutores)//cadastrar instrutores
rotas.put('/instrutores/:id', instrutores.atualizarInstrutores)//atualiza todo as informações de um recurso
rotas.patch('/instrutores/:id', instrutores.atualizarStatusInstrutor)
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);
module.exports = rotas;