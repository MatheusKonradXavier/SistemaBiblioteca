const uuid = require('../jobs/genid');
const axios = require('../../apiConnect');

exports.selecionaUsuario = async (req, res) => {
    const leitores = await axios.get('/leitores');
    res.render('cadastrarEmprestimo', { leitores });
}

exports.selecionaObra = async (req, res) => {
    const erro = req.flash('erro');
    const sucess = req.flash('sucess');
    const obras = await axios.get('/obras');
    const leitor = await axios.get('/leitores/' + req.params.id);
    res.render('cadastrarEmprestimoPt2', { obras, leitor, erro, sucess });
}

exports.registrarEmprestimo = async (req, res) => {
    try {
        const {
            data_devolucao,
            obrasarray,
            leitores_id
        } = req.body;
        
        await axios.post('/emprestimos', { data_devolucao, leitores_id, obra_id:obrasarray })
        req.flash('sucess', 'Empréstimo realizado com sucesso !!');
        return res.redirect('back');
    } catch (error) {
        req.flash('erro', error.response.data.errors[0]);
        res.redirect('back');
    }
}

exports.verTodosEmprestimos = async (req, res) => {
    const emprestimos = await axios.get('/emprestimos');
    res.render('verTodosEmprestimos', {emprestimos})
}

exports.deletarEmprestimo = async function (req, res) {
    try {
        await axios.delete('/emprestimos/' + req.params.id);
    res.redirect('/emprestimo/todos');
    } catch (error) {
        console.log(error.response.data)
    }
    
}

exports.maisdetalhes = async function (req, res) {
    const emprestimos = await axios.get('/emprestimos/'+req.params.id);
    const leitor = await axios.get('/leitores/'+emprestimos.data.emprestimo.leitores_id);
    res.render('detalhesEmprestimo', {emprestimos, leitor});
}