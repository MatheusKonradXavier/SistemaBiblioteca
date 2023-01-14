import Sequelize from 'sequelize';
const { Model } = Sequelize;

export default class Emprestimo extends Model {
    static init(sequelize) {
        super.init({
            data_devolucao: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
        }, {
            sequelize,
            tableName: 'Emprestimos'
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Leitor, { foreignKey: 'leitores_id', as: 'leitores' });
        this.hasMany(models.Obra, { foreignKey: 'id_emp', as: 'obras' });
    }

}