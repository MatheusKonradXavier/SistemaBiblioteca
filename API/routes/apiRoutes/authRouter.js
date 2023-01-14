import express from 'express';
import AuthController from "../../app/controllers/AuthController";
import authMiddleware from '../../app/middlewares/authMiddleware';

const router = express.Router();

router.post('/', AuthController.auth);
router.get('/user', authMiddleware, AuthController.getUser);

export default router;