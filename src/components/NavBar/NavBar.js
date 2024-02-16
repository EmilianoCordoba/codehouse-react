import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">
        Mi Tienda
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`#${category}`}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
