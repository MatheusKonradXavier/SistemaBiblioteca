import Categoria from '../models/Categoria';
import Obra from '../models/Obra';

class ObraController {
    async store(req, res) {
        try {
            const { id, isbn, nomeObra, autor, dataPublicacao, numEdicao, editora } = req.body;
            const novaObra = await Obra.create({ id, isbn, nomeObra, autor, dataPublicacao, numEdicao, editora });
            const { categoriaid } = req.body;
            const categoria = await Categoria.findByPk(categoriaid);
            if (!categoria) {
                return res.status(400).json({ error: 'Categoria not found' });
            }
            await novaObra.setCategorias([categoria]);
            
            return res.json({ novaObra });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    // Index
    async index(req, res) {
        try {
            const obras = await Obra.findAll({
                include: {
                    association: 'categorias',
                    through: { 
                        attributes: []
                    } 
                }
            });
            return res.json(obras);
        } catch (e) {
            return res.json(null);
        }
    }

    // Show
    async show(req, res) {
        try {
            const obra = await Obra.findByPk(req.params.id, {
                include: {
                    association: 'categorias',
                    through: { 
                        attributes: []
                    } 
                }
            });
            return res.json({ obra });
        } catch (e) {
            return res.json(null);
        }
    }

    // Update
    async update(req, res) {
        try {
            const obra = await Obra.findByPk(req.params.id);
            if (!obra) {
                return res.status(400).json({
                    errors: ['Admin não existe'],
                });
            }
            const novosDados = await obra.update(req.body);
            const { categoriaid } = req.body;

            if (categoriaid){
                const categoria = await Categoria.findByPk(categoriaid);
                obra.setCategorias(categoria);
            }

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
            const obra = await Obra.findByPk(req.params.id);

            if (!obra) {
                return res.status(400).json({
                    errors: ['Admin não existe'],
                });
            }

            await obra.destroy();
            return res.json('Deletado com sucesso');
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

}

export default new ObraController();