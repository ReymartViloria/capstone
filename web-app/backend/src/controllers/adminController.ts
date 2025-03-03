import { Request, Response } from 'express';
import AdminService from '../services/adminService';

class AdminController {
    private adminService: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    public registerStudent = async (req: Request, res: Response) => {
        try {
            const studentData = req.body;
            const newStudent = await this.adminService.registerStudent(studentData);
            res.status(201).json(newStudent);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    public viewTimestamps = async (req: Request, res: Response) => {
        try {
            const timestamps = await this.adminService.getAllTimestamps();
            res.status(200).json(timestamps);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    public scanQRCode = async (req: Request, res: Response) => {
        try {
            const { qrCode } = req.body;
            const notification = await this.adminService.handleQRCodeScan(qrCode);
            res.status(200).json(notification);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default AdminController;