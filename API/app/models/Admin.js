import Sequelize from 'sequelize';
const { Model } = Sequelize;
import bcryptjs from 'bcryptjs';

export default class Admin extends Model {
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
            nomeAdmin: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 50],
                        msg: 'Campo nome deve ter entre 3 e 50 caracteres',
                    },
                },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 50],
                        msg: 'A senha precisa ter entre 6 e 50 caracteres',
                    },
                },
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
        });

        return this;
    }

    passwordIsValid(password) {
        return bcryptjs.compare(password, this.password_hash);
    }
}