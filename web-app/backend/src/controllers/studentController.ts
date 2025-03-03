import { Request, Response } from 'express';
import StudentService from '../services/studentService';

class StudentController {
    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService();
    }

    public getProfile = async (req: Request, res: Response) => {
        try {
            const studentId = req.params.id;
            const studentProfile = await this.studentService.getProfile(studentId);
            res.status(200).json(studentProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving student profile', error });
        }
    };

    public updateProfile = async (req: Request, res: Response) => {
        try {
            const studentId = req.params.id;
            const updatedData = req.body;
            const updatedProfile = await this.studentService.updateProfile(studentId, updatedData);
            res.status(200).json(updatedProfile);
        } catch (error) {
            res.status(500).json({ message: 'Error updating student profile', error });
        }
    };

    public recordTimestamp = async (req: Request, res: Response) => {
        try {
            const studentId = req.params.id;
            const { type } = req.body; // type can be 'arrival' or 'departure'
            const timestamp = await this.studentService.recordTimestamp(studentId, type);
            res.status(200).json(timestamp);
        } catch (error) {
            res.status(500).json({ message: 'Error recording timestamp', error });
        }
    };

    public getTimestamps = async (req: Request, res: Response) => {
        try {
            const studentId = req.params.id;
            const timestamps = await this.studentService.getTimestamps(studentId);
            res.status(200).json(timestamps);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving timestamps', error });
        }
    };
}

export default StudentController;