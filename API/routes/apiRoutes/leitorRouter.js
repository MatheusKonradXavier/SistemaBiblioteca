import express from 'express';
import leitorController from "../../app/controllers/LeitorController";
import authMiddleware from "../../app/middlewares/authMiddleware";

const router = express.Router();

router.get('/',  leitorController.index);
router.get('/:id',  leitorController.show);

router.post('/',  leitorController.store);
router.put('/:id',  leitorController.update);
router.delete('/:id',  leitorController.delete);

export default router;