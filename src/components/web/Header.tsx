import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between p-6 bg-white bg-opacity-70 backdrop-blur-md shadow-sm relative z-50">
        <Link to="/" className="text-2xl font-playfair font-bold tracking-wider">
          ÉLÉGANCE
        </Link>

        <button
          onClick={toggleMenu}
          className="flex flex-col space-y-1 p-2 hover:bg-gray-100 transition-colors duration-200 z-50"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </nav>

      {/* Drawer et overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300"
            onClick={closeMenu}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-black text-2xl hover:bg-gray-100 w-8 h-8 flex items-center justify-center rounded"
            >
              ×
            </button>

            <nav className="mt-20 px-8 space-y-8">
              <h2 className="font-playfair text-2xl mb-4">COLLECTIONS</h2>
              <ul className="space-y-6">
                <li>
                  <Link to="/femme" onClick={closeMenu} className="text-lg hover:text-gray-600">
                    FEMME
                  </Link>
                </li>
                <li>
                  <Link to="/homme" onClick={closeMenu} className="text-lg hover:text-gray-600">
                    HOMME
                  </Link>
                </li>
                <li>
                  <Link to="/enfant" onClick={closeMenu} className="text-lg hover:text-gray-600">
                    ENFANT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
