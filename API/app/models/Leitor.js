import Sequelize from 'sequelize';
const { Model } = Sequelize;

export default class Leitor extends Model {
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
            cpf: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [11,15],
                        msg: 'Campo cpf inválido',
                    },
                },
            },
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 50 caracteres',
                    },
                },
            },
            dataNascimento: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 20],
                        msg: 'Campo data de nascimento inválido',
                    },
                },
            },
            cep: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 10],
                        msg: 'Campo cep inválido',
                    },
                },
            },
            rua: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo rua deve ter entre 3 e 50 caracteres',
                    },
                },
            },
            bairro: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo bairro deve ter entre 3 e 50 caracteres',
                    },
                },
            },
            numeroCasa: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [1, 50],
                        msg: 'O campo numero casa não pode ficar vazio',
                    },
                },
            },
            cidade: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo cidade deve ter entre 3 e 50 caracteres',
                    },
                },
            },
            uf: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [2,3],
                        msg: 'Campo UF deve ter no máximo 2 caracteres',
                    },
                },
            },
            telefone: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [8, 20],
                        msg: 'Campo telefone inválido',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email inváldio',
                    },
                },
            }
    
        }, {
            sequelize,
            tableName: 'leitores',
        });
    
        return this;
    }

    static associate(models) {
        this.hasMany(models.Emprestimo, { foreignKey: 'leitores_id', as: 'emprestimos' });
    }
}
