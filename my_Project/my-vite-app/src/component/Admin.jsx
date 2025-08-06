import React, { useState } from 'react';
import './Admin.css';

const initialUsers = [
  { id: 1, name: 'Emily R.', email: 'emily@mail.com', role: 'Host', status: 'Active' },
  { id: 2, name: 'Kenji M.', email: 'kenji@mail.com', role: 'Guest', status: 'Active' },
  { id: 3, name: 'Sara W.', email: 'sara@mail.com', role: 'Host', status: 'Inactive' }
  // Add more as you wish!
];

function Admin() {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ name: '', email: '', role: 'Host' });

  // Add a new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setUsers([
      ...users,
      {
        id: Date.now(),
        name: form.name,
        email: form.email,
        role: form.role,
        status: 'Active'
      }
    ]);
    setForm({ name: '', email: '', role: 'Host' });
  };

  // Remove a user
  const handleRemoveUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  // (Optional) Simple edit: Toggle status
  const toggleUserStatus = (userId) => {
    setUsers(users.map(u =>
      u.id === userId ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u
    ));
  };

  // Simple stats
  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'Active').length,
    hosts: users.filter(u => u.role === 'Host').length
  };

  return (
    <div className="admin-bg">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">StayBnB Admin</div>
        <nav>
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#users">Users</a>
          <a href="#listings">Listings</a>
          <a href="#settings">Settings</a>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <span className="admin-user">Hello, Admin!</span>
        </header>

        <section className="admin-stats">
          <div className="stat-card">
            <div className="stat-value">{userStats.total}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{userStats.active}</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{userStats.hosts}</div>
            <div className="stat-label">Hosts</div>
          </div>
        </section>

        <section className="admin-table-section" id="users">
          <h2>Manage Users</h2>
          <form className="add-user-form" onSubmit={handleAddUser}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <select
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
            >
              <option value="Host">Host</option>
              <option value="Guest">Guest</option>
              <option value="Admin">Admin</option>
            </select>
            <button type="submit">Add User</button>
          </form>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <span className={`status-badge ${u.status.toLowerCase()}`}>{u.status}</span>
                  </td>
                  <td>
                    <button className="table-btn remove" onClick={() => handleRemoveUser(u.id)}>Remove</button>
                    <button className="table-btn toggle" onClick={() => toggleUserStatus(u.id)}>
                      {u.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Admin;
