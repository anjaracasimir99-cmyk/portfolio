import React from 'react';
import { userInfo, projects } from './data';

function App() {
  // On ajoute manuellement les liens GitHub aux projets correspondants
  const projectLinks = {
    "Système de gestion de stock": "https://github.com/anjaracasimir99-cmyk/stock-master",
    "Location de maisons": "https://github.com/anjaracasimir99-cmyk/immo-mada"
  };

  return (
    <div className="bg-dark text-light min-vh-100" style={{ backgroundColor: '#121212' }}>
      
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark sticky-top border-bottom border-secondary">
        <div className="container">
          <span className="navbar-brand fw-bold">{userInfo.name}</span>
          <div className="d-flex gap-2">
            <a 
              href={userInfo.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-info btn-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-5 text-center bg-dark border-bottom border-secondary">
        <div className="container">
          <h1 className="display-4 fw-bold text-white">{userInfo.title}</h1>
          <p className="lead text-secondary">{userInfo.about}</p>
          <div className="mt-4">
            <span className="badge bg-primary m-1">PHP / Symfony</span>
            <span className="badge bg-info text-dark m-1">React.js / Node.js</span>
            <span className="badge bg-secondary m-1">MySQL</span>
          </div>
        </div>
      </header>

      {/* Projets */}
      <section className="container py-5">
        <h2 className="text-center mb-5 text-white">Mes Réalisations</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 bg-dark text-white border-secondary shadow">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-info">{project.title}</h5>
                  
                  {/* Ajout des liens GitHub sous le nom du projet */}
                  {projectLinks[project.title] && (
                    <a 
                      href={projectLinks[project.title]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-warning mb-2 d-inline-block"
                      style={{ fontSize: '0.85rem', textDecoration: 'none' }}
                    >
                      🔗 Voir sur GitHub
                    </a>
                  )}

                  <h6 className="card-subtitle mb-2 text-muted" style={{ opacity: 0.8 }}>
                    {project.tech}
                  </h6>
                  <p className="card-text text-secondary" style={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact avec MAILTO */}
      <footer className="bg-black text-white py-5 border-top border-secondary">
        <div className="container text-center">
          <h3 className="mb-4">Me contacter</h3>
          <p className="mb-1 text-secondary">
            <strong>Localisation :</strong> {userInfo.contact.location}
          </p>
          <p className="mb-1 text-secondary">
            <strong>Téléphone :</strong> {userInfo.contact.phone}
          </p>
          
          {/* Email avec lien mailto pour redirection directe */}
          <p className="mb-4">
            <strong>Email : </strong>
            <a 
              href={`mailto:${userInfo.contact.email}`} 
              className="text-info text-decoration-none"
            >
              {userInfo.contact.email}
            </a>
          </p>

          <div className="pt-3 border-top border-secondary d-inline-block">
             <span className="text-warning">Disponible dès Mai 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;