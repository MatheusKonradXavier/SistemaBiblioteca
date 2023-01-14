import Admin from '../models/Admin';

class AdminController {
  async store(req, res) {
    try {
      const novoAdmin = await Admin.create(req.body);
      const { id, nomeAdmin } = novoAdmin;
      return res.json({ id, nomeAdmin });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const admins = await Admin.findAll({ attributes: ['id', 'nomeAdmin'] });
      return res.json(admins);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const admin = await Admin.findByPk(req.params.id);

      const { id, nomeAdmin } = admin;
      return res.json({ id, nomeAdmin });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const admin = await Admin.findByPk(req.idAdmin);

      if (!admin) {
        return res.status(400).json({
          errors: ['Admin não existe'],
        });
      }

      const novosDados = await admin.update(req.body);
      const { id, nomeAdmin } = novosDados;
      return res.json({ id, nomeAdmin });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const admin = await Admin.findByPk(req.idAdmin);

      if (!admin) {
        return res.status(400).json({
          errors: ['Admin não existe'],
        });
      }

      await admin.destroy();
      return res.json('Deletado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

}

export default new AdminController();