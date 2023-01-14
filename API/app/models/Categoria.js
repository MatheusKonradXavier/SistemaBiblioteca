import Sequelize from 'sequelize';
const { Model } = Sequelize;

export default class Categoria extends Model {
    static init(sequelize) {
        super.init({
            id : {
                type: Sequelize.STRING,
                defaultValue: '',
                primaryKey: true,
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo Id deve ter entre 3 e 100 caracteres',
                    },
                },
            },
            nomeCategoria: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 50 caracteres',
                    },
                },
            },
        }, {
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Obra, { foreignKey: 'categoria_id', through: 'categoria_obras', as: 'obras' });
    }

}