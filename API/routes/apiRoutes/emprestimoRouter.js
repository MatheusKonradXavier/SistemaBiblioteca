import express from 'express';
import emprestimoController from "../../app/controllers/EmprestimoController";
import authMiddleware from "../../app/middlewares/authMiddleware";

const router = express.Router();

router.get('/', emprestimoController.index);
router.get('/:id', emprestimoController.show);

router.post('/', emprestimoController.store);
router.put('/:id', emprestimoController.update);
router.delete('/:id', emprestimoController.delete);

export default router;