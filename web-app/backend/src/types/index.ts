export interface Student {
    id: string;
    name: string;
    email: string;
    phone: string;
    qrCode: string;
    timestamps: Timestamp[];
}

export interface Admin {
    id: string;
    username: string;
    password: string;
    permissions: string[];
}

export interface Timestamp {
    id: string;
    studentId: string;
    type: 'arrival' | 'departure';
    time: Date;
}

export interface AuthRequest {
    username: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: Student | Admin;
}

export interface StudentProfileResponse {
    student: Student;
}

export interface AdminDashboardResponse {
    students: Student[];
    timestamps: Timestamp[];
}