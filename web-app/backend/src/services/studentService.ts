import { Student } from '../models/student';

export class StudentService {
    private students: Student[] = [];

    public registerStudent(studentData: Omit<Student, 'id'>): Student {
        const newStudent: Student = {
            id: this.generateId(),
            ...studentData,
            timestamps: []
        };
        this.students.push(newStudent);
        return newStudent;
    }

    public getStudentProfile(studentId: string): Student | undefined {
        return this.students.find(student => student.id === studentId);
    }

    public addTimestamp(studentId: string, timestamp: Date, type: 'arrival' | 'departure'): void {
        const student = this.getStudentProfile(studentId);
        if (student) {
            student.timestamps.push({ timestamp, type });
        }
    }

    public getAllStudents(): Student[] {
        return this.students;
    }

    private generateId(): string {
        return (this.students.length + 1).toString();
    }
}