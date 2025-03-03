import { Router } from 'express';
import { StudentController } from '../controllers/studentController';

const router = Router();
const studentController = new StudentController();

// Route to get student profile
router.get('/:id', studentController.getStudentProfile);

// Route to update student profile
router.put('/:id', studentController.updateStudentProfile);

// Route to get student timestamps
router.get('/:id/timestamps', studentController.getStudentTimestamps);

// Route to generate QR code
router.get('/:id/qrcode', studentController.generateQRCode);

export default router;