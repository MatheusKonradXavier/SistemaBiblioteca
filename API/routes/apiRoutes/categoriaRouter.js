import express from 'express';
import categoriaController from "../../app/controllers/CategoriaController";
import authMiddleware from "../../app/middlewares/authMiddleware";

const router = express.Router();

router.get('/',  categoriaController.index);
router.get('/:id',  categoriaController.show);

router.post('/',  categoriaController.store);
router.put('/:id',  categoriaController.update);
router.delete('/:id',  categoriaController.delete);

export default router;