import React from 'react';
import api from '../../../utils/api';
import './UserManagement.css';

const UserManagement = ({ users, fetchUsers }) => {
    const approveUser = async (userId, isApproved) => {
        try {
            await api.put(`/admin/users/${userId}/approve`, { isApproved });
            alert('User status updated!');
            fetchUsers();
        } catch (err) {
            alert('Failed to update user');
        }
    };

    const toggleUserStatus = async (userId, isActive) => {
        try {
            await api.put(`/admin/users/${userId}/status`, { isActive });
            alert('User status updated!');
            fetchUsers();
        } catch (err) {
            alert('Failed to update user');
        }
    };

    return (
        <div className="user-management">
            <h1 className="section-title">User Management</h1>
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Approved</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge badge-${user.role}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <span className={`badge ${user.isActive ? 'badge-active' : 'badge-inactive'}`}>
                                        {user.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td>
                                    <span className={`badge ${user.isApproved ? 'badge-approved' : 'badge-pending'}`}>
                                        {user.isApproved ? 'Yes' : 'Pending'}
                                    </span>
                                </td>
                                <td className="actions-cell">
                                    {!user.isApproved && user.role === 'recruiter' && (
                                        <button
                                            onClick={() => approveUser(user._id, true)}
                                            className="btn btn-approve"
                                        >
                                            Approve
                                        </button>
                                    )}
                                    <button
                                        onClick={() => toggleUserStatus(user._id, !user.isActive)}
                                        className={`btn ${user.isActive ? 'btn-deactivate' : 'btn-activate'}`}
                                    >
                                        {user.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
