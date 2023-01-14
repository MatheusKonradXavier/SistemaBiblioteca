const uuid = require('../jobs/genid');
const axios = require('../../apiConnect');

exports.verTodasObras = async (req, res) => {
    const obras = await axios.get('/obras');
    res.render('verTodasObras', { obras });
}

exports.cadastrarUmaObra = (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    res.render('cadastrarObra', { obra: { data: { obra: {} } }, erro, sucess });
}

exports.cadastrarUmaObraPost = async (req, res) => {
    try {
        const { isbn, nomeObra, autor, dataPublicacao, numEdicao, editora, categoriaid } = req.body;
        const { data } = await uuid();
        const { id } = await data;
        await axios.post('/obras', { id, isbn, nomeObra, autor, dataPublicacao, numEdicao, editora, categoriaid });
        req.flash('sucess', `Obra ${nomeObra} cadastrada com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.editarUmaObra = async (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    const obra = await axios.get('/obras/' + req.params.id);
    return res.render('cadastrarObra', { obra, erro, sucess });
}

exports.editarUmaObraPost = async (req, res) => {
    try {
        const { isbn, nomeObra, autor, dataPublicacao, numEdicao, editora } = req.body;
        const categoria = await axios.put('/obras/' + req.params.id, { isbn, nomeObra, autor, dataPublicacao, numEdicao, editora });
        req.flash('sucess', `Obra ${nomeObra} editada com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.excluirUmaObra = async (req, res) => {
    await axios.delete('/obras/' + req.params.id);
    return res.redirect('back');
}