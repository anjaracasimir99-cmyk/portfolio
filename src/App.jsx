import React from 'react';
import { userInfo, projects } from './data';

function App() {
  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container">
          <span className="navbar-brand fw-bold">{userInfo.name}</span>
          <a href={userInfo.contact.github} className="btn btn-outline-light btn-sm">GitHub</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-5 text-center bg-white border-bottom">
        <div className="container">
          <h1 className="display-4 fw-bold">{userInfo.title}</h1>
          <p className="lead text-muted">{userInfo.about}</p>
          <div className="mt-4">
            <span className="badge bg-primary m-1">PHP / Symfony</span>
            <span className="badge bg-info text-dark m-1">React.js / Node.js</span>
            <span className="badge bg-secondary m-1">MySQL</span>
          </div>
        </div>
      </header>

      {/* Projets */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Mes Réalisations</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-primary">{project.tech}</h6>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-dark text-white py-5">
        <div className="container text-center">
          <h3>Me contacter</h3>
          <p>{userInfo.contact.location} | {userInfo.contact.phone}</p>
          <p>{userInfo.contact.email}</p>
          <div className="mt-3">
             <small>Disponible dès Mai 2026</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;