import { Student } from '../models/student';
import { Admin } from '../models/admin';

export class AdminService {
    async registerStudent(studentData: Partial<Student>): Promise<Student> {
        const newStudent = new Student(studentData);
        await newStudent.save();
        return newStudent;
    }

    async viewAllStudents(): Promise<Student[]> {
        return await Student.find();
    }

    async viewStudentTimestamps(studentId: string): Promise<any> {
        const student = await Student.findById(studentId);
        if (!student) {
            throw new Error('Student not found');
        }
        return student.timestamps;
    }

    async sendSmsNotification(parentPhone: string, message: string): Promise<void> {
        // Logic to send SMS notification to the parent
        // This could involve integrating with an SMS service provider
    }
}