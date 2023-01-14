import Categoria from '../models/Categoria';

class CategoriaController {
    async store(req, res) {
        try {
            const novaCategoria = await Categoria.create(req.body);
            const { id, nomeCategoria } = novaCategoria;
            return res.json({ id, nomeCategoria });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const categoria = await Categoria.findAll({ attributes: ['id', 'nomeCategoria'] });
            return res.json(categoria);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            const { id, nomeCategoria } = categoria;
            return res.json({ id, nomeCategoria });
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            if (!categoria) {
                return res.status(400).json({
                    errors: ['Admin não existe'],
                });
            }
            const novosDados = await categoria.update(req.body);
            const { id, nomeCategoria } = novosDados;
            return res.json({ id, nomeCategoria });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Delete
    async delete(req, res) {
        try {
            const categoria = await Categoria.findByPk(req.params.id);

            if (!categoria) {
                return res.status(400).json({
                    errors: ['Admin não existe'],
                });
            }

            await categoria.destroy();
            return res.json('Deletado com sucesso');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

}

export default new CategoriaController();