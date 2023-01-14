import dotenv from 'dotenv';
dotenv.config();

import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import './app/database'
import apiRouter from './routes/apiRouter';

// @ app
const app = express();

// @ middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(morgan('combined'));
app.use(cors());

// @ routes
app.use(`/api/${apiRouter.GenerateId.route}`, apiRouter.GenerateId.dir);
app.use(`/api/${apiRouter.Auth.route}`, apiRouter.Auth.dir);
app.use(`/api/${apiRouter.Admin.route}`, apiRouter.Admin.dir);
app.use(`/api/${apiRouter.Categoria.route}`, apiRouter.Categoria.dir);
app.use(`/api/${apiRouter.Obra.route}`, apiRouter.Obra.dir);
app.use(`/api/${apiRouter.Leitor.route}`, apiRouter.Leitor.dir);
app.use(`/api/${apiRouter.Emprestimo.route}`, apiRouter.Emprestimo.dir);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`\nServer is on in http://127.0.0.1:${port}`);
});