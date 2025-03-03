import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentProfile from '../components/StudentProfile';

const StudentProfilePage = () => {
    const { studentId } = useParams();
    const [studentData, setStudentData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`/api/students/${studentId}`);
                const data = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentData();
    }, [studentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!studentData) {
        return <div>No student data found.</div>;
    }

    return (
        <div>
            <h1>Student Profile</h1>
            <StudentProfile student={studentData} />
        </div>
    );
};

export default StudentProfilePage;