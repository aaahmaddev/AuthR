import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsersFunction = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        getUsersFunction();
    }, []);

    return (
        <div className="users-container d-flex align-items-center justify-content-center">
            {users.map((user) => (
                <div className="user-card d-flex align-items-center justify-content-center gap-3" key={user.id || user._id}>
                    <p><strong>ID:</strong> {user.id || user._id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersList;
