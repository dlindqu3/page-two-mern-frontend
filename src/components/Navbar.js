import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <header>
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </header>
  )
}

export default Navbar
