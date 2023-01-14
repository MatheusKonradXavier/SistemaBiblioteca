import Sequelize from 'sequelize';
const { Model } = Sequelize;

export default class Obra extends Model {
    static init(sequelize) {
        super.init({
            id: {
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

            isbn: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [10, 13],
                        msg: 'O campo isbn deve ter entre 10 e 13 caracteres',
                    },
                },
            },

            nomeObra: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 100],
                        msg: 'Tamanho inválido do campo nome_obra',
                    },
                },
            },

            autor: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'O campo autor deve ter entre 3 e 50 caracteres',
                    },
                },
            },

            dataPublicacao: {
                type: Sequelize.STRING,
                defaultValue: '',
            },

            numEdicao: {
                type: Sequelize.STRING,
                defaultValue: '',
            },

            editora: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'O campo editora deve ter entre 3 e 50 caracteres',
                    },
                },
            },

        }, {
            sequelize,
        });

        return this;
    }

    static associate(models) {
        this.belongsToMany(models.Categoria, { foreignKey: 'obra_id', through: 'categoria_obras', as: 'categorias' });
        this.belongsTo(models.Emprestimo, { foreignKey: 'id_emp', as: 'emprestimo'});
    }

}


