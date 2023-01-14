import express from 'express';
import adminController from "../../app/controllers/AdminController";
import authMiddleware from "../../app/middlewares/authMiddleware";

const router = express.Router();

router.get('/', adminController.index);
router.get('/:id', adminController.show);

router.post('/', adminController.store);
router.put('/', authMiddleware, adminController.update);
router.delete('/', authMiddleware, adminController.delete);

export default router;