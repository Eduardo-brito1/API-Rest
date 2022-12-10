const { instrutores } = require('../bancodedados')

const listarInstrutores = (req, res) => {
    return res.json(instrutores);
}

module.exports = {
    listarInstrutores
}