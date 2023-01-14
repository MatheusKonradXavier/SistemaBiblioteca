import Emprestimo from '../models/Emprestimo';
import Obra from '../models/Obra';
import Leitor from '../models/Leitor';

class EmprestimoController {
    async store(req, res) {
        try {
            const { leitores_id, obra_id, data_devolucao } = req.body;
            if (!leitores_id || !obra_id || !data_devolucao) {
                return res.status(400).json({
                    errors: ['Obra, leitor ou data_devolução não foram informados'],
                });
            };
                
            const leitor = await Leitor.findByPk(leitores_id);
            const obra = await Obra.findByPk(obra_id);

            if (!leitor || !obra) {
                return res.status(400).json({
                    errors: ['leitor ou obra inválidos'],
                });
            };

            const novoEmprestimo = await Emprestimo.create({ data_devolucao, leitores_id });

            if(!obra.id_emp){
                obra.setEmprestimo(novoEmprestimo);
                return res.json({ novoEmprestimo });
            }else{
                const emprestimo = await Emprestimo.findByPk(obra.id_emp);
                emprestimo.destroy();

                obra.setEmprestimo(novoEmprestimo);
                return res.json({ novoEmprestimo, msg :'A obra ja existia em um outro empréstimo, o outro empréstimo foi apagado' });
            }

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const emprestimo = await Emprestimo.findAll({
                include: {
                    association: 'leitores',
                },
                include: {
                    association: 'obras',
                },
            });
            return res.json(emprestimo);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const emprestimo = await Emprestimo.findByPk(req.params.id, {
                include: {
                    association: 'leitores',
                },
                include: {
                    association: 'obras',
                }});

            return res.json({ emprestimo });
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            const emprestimo = await Emprestimo.findByPk(req.params.id, {
                include: {
                    association: 'leitores',
                },
                include: {
                    association: 'obras',
                }});

            if (!emprestimo) {
                return res.status(400).json({
                    errors: ['Emprestimo não existe'],
                });
            }

            const novosDados = await emprestimo.update(req.body);
            return res.json({ novosDados });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Delete
    async delete(req, res) {
        try {
            const emprestimo = await Emprestimo.findByPk(req.params.id);

            if (!emprestimo) {
                return res.status(400).json({
                    errors: ['Emprestimo não existe'],
                });
            }

            await emprestimo.destroy();
            return res.json('Deletado com sucesso');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

}

export default new EmprestimoController();