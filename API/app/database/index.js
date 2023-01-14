import Sequelize from "sequelize";
import databaseConfig from "../config/database.cjs";
import Admin from '../models/Admin';
import Categoria from '../models/Categoria';
import Obra from '../models/Obra';
import Leitor from "../models/Leitor";
import Emprestimo from "../models/Emprestimo";

const models = [Admin, Categoria, Obra, Leitor, Emprestimo];
const associations = [Categoria, Obra, Emprestimo, Leitor ];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
associations.forEach( associations => associations.associate(connection.models));

