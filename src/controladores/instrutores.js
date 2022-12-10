const { instrutores } = require('../bancodedados')
let { identificadorInstrutor } = require('../bancodedados')

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}


const obterinstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' });
    }

    return res.status(200).json(instrutor);
}

const cadastrarinstrutores = ((req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'nome e obrigatorio' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'email e obrigatorio' })
    }
    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status || true
    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor);
})

const atualizarInstrutores = ((req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'nome e obrigatorio' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'email e obrigatorio' })
    }


    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' });
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(203).send()

})

module.exports = {
    listarInstrutores,
    obterinstrutor,
    cadastrarinstrutores,
    atualizarInstrutores
}