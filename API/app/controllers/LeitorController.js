import Leitor from '../models/Leitor';

class LeitorController {
    async store(req, res) {
        try {
            const novoLeitor = await Leitor.create(req.body);
            return res.json({ novoLeitor });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const leitores = await Leitor.findAll();
            return res.json(leitores);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const leitor = await Leitor.findByPk(req.params.id, {
                include: {
                    association: 'emprestimos',
                    include: {
                        association :'obras'
                    }
                }
            });

            return res.json(leitor);
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            const leitor = await Leitor.findByPk(req.params.id);

            if (!leitor) {
                return res.status(400).json({
                    errors: ['Leitor não existe'],
                });
            }

            const novosDados = await leitor.update(req.body);
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
            const leitor = await Leitor.findByPk(req.params.id);

            if (!leitor) {
                return res.status(400).json({
                    errors: ['Leitor não existe'],
                });
            }

            await leitor.destroy();
            return res.json('Deletado com sucesso');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

}

export default new LeitorController();