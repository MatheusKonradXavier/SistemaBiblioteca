//variáveis de ambiente
require('dotenv').config();

//iniciando o express
const express = require('express');
const app = express();

//modelagem da base dados
//const mongoose = require('mongoose');
/*mongoose.connect(process.env.CONNECTIONSTRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Banco conectado');
    app.emit('pronto');
  })
  .catch(e => console.log(e));*/

//identificar o navegador de um cliente


//salvar as sessões na base de dados
//const MongoStore = require('connect-mongo');

//flash messages que são salvas em sessão
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
//rotas da aplicação como /home
const routes = require('./routes');

//diretórios vulgo caminhos
const path = require('path');
// const helmet = require('helmet'); // helmet começou a causar problemas no localhost por conta da falta de SSL

//tokens de segurança
//const csrf = require('csurf');

//importação dos nosso middlewares
//const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// app.use(helmet()); // helmet começou a causar problemas no localhost por conta da falta de SSL

//permite postar formularios dentro da aplicação
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//arquivos estáticos da aplicação que podem ser acessados diretamente como imagens, css, js e etc
app.use(express.static(path.resolve(__dirname, 'public')));

//configurações de sessão
app.use(cookieParser('NotSoSecret'));
app.use(session({
  secret : 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());

//arquivos que a gente renderiza na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));
//seleção da engine que a gente ta utilizando pra renderizar
app.set('view engine', 'ejs');

//app.use(csrf());
// Nossos middlewares
//app.use(middlewareGlobal);
//app.use(checkCsrfError);
//app.use(csrfMiddleware);
app.use(routes);

//liga o app

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
