import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="footer">
          &copy; Copyright {new Date().getFullYear()} Blooms Movies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
