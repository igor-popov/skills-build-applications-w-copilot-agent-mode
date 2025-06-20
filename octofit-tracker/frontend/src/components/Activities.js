
import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = () => {
    fetch('https://shiny-acorn-xx5q79q6r9c9966-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-4">Activities</h1>
      <button className="btn btn-primary mb-3" onClick={fetchActivities}>Refresh</button>
      <div className="row">
        {activities.map(activity => (
          <div className="col-md-4 mb-4" key={activity._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{activity.activity_type}</h5>
                <h6 className="card-subtitle mb-2 text-muted">User: {activity.user}</h6>
                <p className="card-text">Duration: {activity.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
