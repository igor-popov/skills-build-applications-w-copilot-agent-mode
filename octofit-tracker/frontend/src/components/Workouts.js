
import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = () => {
    fetch('https://shiny-acorn-xx5q79q6r9c9966-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Workouts</h1>
      <button className="btn btn-primary mb-3" onClick={fetchWorkouts}>Refresh</button>
      <div className="row">
        {workouts.map(workout => (
          <div className="col-md-4 mb-4" key={workout._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{workout.name}</h5>
                <p className="card-text">{workout.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
