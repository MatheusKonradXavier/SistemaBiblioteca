const express = require('express');
const route = express.Router();

const { loginRequired } = require('./src/middlewares/middleware');

//const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const emprestimosController = require('./src/controllers/emprestimosController');
const categoriaController = require('./src/controllers/categoriaController');
const leitorController = require('./src/controllers/leitorController');
const obraController = require('./src/controllers/obraController');

// Rotas de login
route.get('/', loginController.index);
//route.post('/register', loginController.register);
//route.post('/login', loginController.login);
route.get('/logout', loginController.logout);

//rotas do registro de usuários

//rota para ver, editar e excluir todos os leitores
route.get('/todosLeitores', leitorController.verTodosLeitores);
route.get('/cadastrarLeitor', leitorController.cadastrarUmLeitor);
route.post('/cadastrarLeitor/post', leitorController.cadastrarUmLeitorPost);
route.get('/editarLeitor/:id', leitorController.editarUmLeitor);
route.post('/editarLeitor/post/:id', leitorController.editarUmLeitorPost);
route.get('/deleteLeitor/:id', leitorController.excluirUmLeitor);

//rotas para ver, editar e excluir todas as obras
route.get('/cadastrarObra', obraController.cadastrarUmaObra);
route.post('/cadastrarObra/post', obraController.cadastrarUmaObraPost);
route.get('/todasObras', obraController.verTodasObras);
route.get('/todasObras/edit/:id', obraController.editarUmaObra);
route.post('/todasObras/edit/post/:id', obraController.editarUmaObraPost);
route.get('/todasObras/delete/:id', obraController.excluirUmaObra);

//Rotas para relizar empréstimos
route.get('/emprestimo/index', emprestimosController.selecionaUsuario);
route.get('/emprestimo/index/:id', emprestimosController.selecionaObra);
route.post('/emprestimo/index/post',emprestimosController.registrarEmprestimo);
route.get('/emprestimo/todos', emprestimosController.verTodosEmprestimos);
route.get('/emprestimo/maisdetalhes/:id', emprestimosController.maisdetalhes);
route.get('/emprestimo/maisdetalhes/delete/:id', emprestimosController.deletarEmprestimo);

//Rotas categoria
route.get('/categorias',  categoriaController.verTodasCategorias);
route.get('/categorias/cadastrar',  categoriaController.cadastrarUmaCategoria);
route.post('/categorias/cadastrar/post',  categoriaController.cadastrarUmaCategoriaPost);
route.get('/categorias/edit/:id',  categoriaController.editarUmaCategoria);
route.post('/categorias/edit/post/:id',  categoriaController.editarUmaCategoriaPost);
route.get('/categorias/delete/:id',  categoriaController.excluirUmaCategoria);

module.exports = route;