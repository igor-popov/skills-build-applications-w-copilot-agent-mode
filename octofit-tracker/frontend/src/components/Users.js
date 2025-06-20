
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://shiny-acorn-xx5q79q6r9c9966-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Users</h1>
      <button className="btn btn-primary mb-3" onClick={fetchUsers}>Refresh</button>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
