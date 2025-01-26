import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Kalikha</h1>
      <h2>Featured Products</h2>
      {/* Sample products list */}
      <div>
        <Link to="/product/1">
          <div>Product 1</div>
        </Link>
        <Link to="/product/2">
          <div>Product 2</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
