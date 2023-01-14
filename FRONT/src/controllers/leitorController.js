const uuid = require('../jobs/genid');
const axios = require('../../apiConnect');

exports.verTodosLeitores = async (req, res) => {
    const leitores = await axios.get('/leitores');
    res.render('verTodosLeitores', { leitores });
}

exports.cadastrarUmLeitor = (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    res.render('cadastrarLeitor', { leitor: { data: {} }, erro, sucess });
}

exports.cadastrarUmLeitorPost = async (req, res) => {
    try {
        const { cpf, nome, dataNascimento, cep, rua, bairro, numeroCasa, cidade, uf, telefone, email } = req.body;
        const { data } = await uuid();
        const { id } = await data;
        await axios.post('/leitores', { id, cpf, nome, uf, dataNascimento, cep, rua, bairro, numeroCasa, cidade, uf, telefone, email });
        req.flash('sucess', `Leitor ${nome} cadastrado com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.editarUmLeitor = async (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    const leitor = await axios.get('/leitores/' + req.params.id);
    return res.render('cadastrarLeitor', { leitor, erro, sucess });
}

exports.editarUmLeitorPost = async (req, res) => {
    try {
        const { cpf, nome, dataNascimento, cep, rua, bairro, numeroCasa, cidade, uf, telefone, email } = req.body;
        const categoria = await axios.put('/leitores/' + req.params.id, { cpf, nome, uf, dataNascimento, cep, rua, bairro, numeroCasa, cidade, uf, telefone, email });
        req.flash('sucess', `Leitor ${nome} editado com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.excluirUmLeitor = async (req, res) => {
    await axios.delete('/leitores/' + req.params.id);
    return res.redirect('back');
}