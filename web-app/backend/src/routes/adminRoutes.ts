import { Router } from 'express';
import { AdminController } from '../controllers/adminController';

const router = Router();
const adminController = new AdminController();

// Route to register a new student
router.post('/register', adminController.registerStudent);

// Route to view all students' timestamps
router.get('/timestamps', adminController.viewTimestamps);

// Route to scan a QR code
router.post('/scan-qr', adminController.scanQRCode);

export default router;