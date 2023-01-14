import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

class AuthController {
  async auth(req, res) {
    try {
      const { nomeAdmin = '', password = '' } = req.body;

      if (!nomeAdmin || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const admin = await Admin.findOne({ where: { nomeAdmin } });

      if (!admin) {
        return res.status(401).json({
          errors: ['Admin não existe'],
        });
      }

      if (!(await admin.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida'],
        });
      }

      const { id } = admin;
      const token = jwt.sign({ id, nomeAdmin }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (error) {
      res.json('Erro ao logar');
    }
  }

  async getUser(req, res) {
    try {
      const admin = await Admin.findByPk(req.idAdmin, { attributes: ['id', 'nomeAdmin', 'created_at','updated_at'] });

      if (!admin) {
        return res.status(400).json({
          errors: ['Admin não existe'],
        });
      }
      res.json(admin);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AuthController();


