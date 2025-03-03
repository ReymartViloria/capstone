import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/api/admin/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleRegisterStudent = async (studentData) => {
        try {
            await axios.post('/api/admin/register', studentData);
            // Refresh the student list after registration
            const response = await axios.get('/api/admin/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error registering student:', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            {loading ? (
                <p>Loading students...</p>
            ) : (
                <div>
                    <h2>Registered Students</h2>
                    <ul>
                        {students.map((student) => (
                            <li key={student.id}>
                                {student.name} - QR Code: {student.qrCode}
                            </li>
                        ))}
                    </ul>
                    {/* Add registration form and other functionalities here */}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;