
import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchLeaderboard = () => {
    fetch('https://shiny-acorn-xx5q79q6r9c9966-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Leaderboard</h1>
      <button className="btn btn-primary mb-3" onClick={fetchLeaderboard}>Refresh</button>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.user.username}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
