import React, { useEffect, useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import { fetchStudents } from '../services/adminService';

const AdminDashboardPage: React.FC = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const studentData = await fetchStudents();
            setStudents(studentData);
        };

        getStudents();
    }, []);

    return (
        <div className="admin-dashboard-page">
            <h1>Admin Dashboard</h1>
            <AdminDashboard students={students} />
        </div>
    );
};

export default AdminDashboardPage;