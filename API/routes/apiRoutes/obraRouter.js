import express from 'express';
import obraController from "../../app/controllers/ObraController";
import authMiddleware from "../../app/middlewares/authMiddleware";

const router = express.Router();

router.get('/',  obraController.index);
router.get('/:id',  obraController.show);

router.post('/',  obraController.store);
router.put('/:id',  obraController.update);
router.delete('/:id',  obraController.delete);

export default router;