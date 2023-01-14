const uuid = require('../jobs/genid');
const axios = require('../../apiConnect');

exports.verTodasCategorias = async (req, res) => {
    const categorias = await axios.get('/categorias');
    res.render('verTodasCategorias', { categorias });
}

exports.cadastrarUmaCategoria = (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    res.render('cadastrarCategoria', { categoria: { data: { id: '', nomeCategoria: '' } }, erro, sucess });
}

exports.cadastrarUmaCategoriaPost = async (req, res) => {
    try {
        const { nomeCategoria } = req.body;
        const { data } = await uuid();
        const { id } = await data;
        await axios.post('/categorias/', { id, nomeCategoria });
        req.flash('sucess', `Categoria ${nomeCategoria} cadastrada com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.editarUmaCategoria = async (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    const categoria = await axios.get('/categorias/' + req.params.id);
    return res.render('cadastrarCategoria', { categoria, erro, sucess });
}

exports.editarUmaCategoriaPost = async (req, res) => {
    try {
        const { nomeCategoria } = req.body;
        const categoria = await axios.put('/categorias/' + req.params.id, { nomeCategoria });
        req.flash('sucess', `Categoria ${nomeCategoria} editada com sucesso !!`);
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.excluirUmaCategoria = async (req, res) => {
    await axios.delete('/categorias/' + req.params.id);
    return res.redirect('back');
}