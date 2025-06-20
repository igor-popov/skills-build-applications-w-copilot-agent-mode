
import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = () => {
    fetch('https://shiny-acorn-xx5q79q6r9c9966-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Teams</h1>
      <button className="btn btn-primary mb-3" onClick={fetchTeams}>Refresh</button>
      <div className="row">
        {teams.map(team => (
          <div className="col-md-4 mb-4" key={team._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Members</h6>
                <ul className="list-group list-group-flush">
                  {team.members && team.members.map(member => (
                    <li className="list-group-item" key={member._id}>{member.username}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
