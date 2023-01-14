import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login necessário'],
        });
    }

    const [, token] = authorization.split(' ');
    
    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, nomeAdmin } = dados;

        const admin = await Admin.findOne({
            where: {
                id,
                nomeAdmin,
            },
        });

        if (!admin) {
            return res.status(401).json({
                errors: ['Admin inválido'],
            });
        }

        req.idAdmin = id;
        req.nomeAdmin = nomeAdmin;
        return next();
    } catch (e) {
        return res.status(401).json({
            errors: ['Token expirado ou inválido.'],
        });
    }
};