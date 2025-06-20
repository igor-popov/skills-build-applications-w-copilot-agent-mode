
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mt-3 mb-4 shadow">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
                  <div className="card-body">
                    <h1 className="card-title display-4 mb-3 text-primary">Welcome to OctoFit Tracker</h1>
                    <p className="card-text lead">Track your activities, join teams, view the leaderboard, and manage your workouts with a modern, easy-to-use dashboard.</p>
                    <div className="d-grid gap-2 mt-4">
                      <Link to="/activities" className="btn btn-outline-primary btn-lg">View Activities</Link>
                      <Link to="/leaderboard" className="btn btn-outline-success btn-lg">Leaderboard</Link>
                      <Link to="/teams" className="btn btn-outline-info btn-lg">Teams</Link>
                      <Link to="/users" className="btn btn-outline-secondary btn-lg">Users</Link>
                      <Link to="/workouts" className="btn btn-outline-warning btn-lg">Workouts</Link>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
