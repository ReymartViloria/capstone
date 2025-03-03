import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentProfile = () => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const studentId = '123'; // Replace with actual student ID from context or props

    useEffect(() => {
        const fetchStudentProfile = async () => {
            try {
                const response = await axios.get(`/api/students/${studentId}`);
                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentProfile();
    }, [studentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!student) {
        return <div>No student data found.</div>;
    }

    return (
        <div className="student-profile">
            <h1>{student.name}'s Profile</h1>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <h2>QR Code</h2>
            <img src={student.qrCodeUrl} alt="Student QR Code" />
            <h2>Timestamps</h2>
            <ul>
                {student.timestamps.map((timestamp, index) => (
                    <li key={index}>
                        {timestamp.type}: {new Date(timestamp.time).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentProfile;