import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        className="btn btn-primary d-md-none position-fixed top-0 end-0 m-3"
        style={{ zIndex: 1050 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`d-md-block bg-light ${isOpen ? 'd-block' : 'd-none'} position-fixed top-0 start-0 h-100`}
        style={{ width: '320px', zIndex: 1040 }}
      >
        <ul className="list-unstyled p-3">
          {categories.map((category, index) => (
            <li key={index} className="mb-3">
              <a href="#" className="text-decoration-none text-dark">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
