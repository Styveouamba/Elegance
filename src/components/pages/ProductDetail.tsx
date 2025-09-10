import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface UnsplashPhoto {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const img: UnsplashPhoto | undefined = location.state?.image;
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false); // état pour animation

  if (!img) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Produit non trouvé</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);

    // Animation et message temporaire
    setTimeout(() => setAdded(false), 1500);
    // Ici tu pourrais ajouter le produit au panier réel
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-16 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
      >
        ← Retour
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={img.urls.regular}
          alt={img.alt_description || "Produit"}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg"
        />

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-playfair font-semibold mb-4">
              {img.alt_description || "Produit Élégant"}
            </h1>
            <p className="text-gray-700 mb-4">
              Description du produit : minimaliste, élégant et moderne.
            </p>
            <p className="text-xl font-bold mb-4">Prix : 49,99€</p>

            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                +
              </button>
            </div>

            <div className="relative">
              <button
                onClick={handleAddToCart}
                className={`px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transform transition-transform duration-200 ${
                  added ? "scale-110" : ""
                }`}
              >
                Ajouter au panier
              </button>

              {/* Message temporaire */}
              {added && (
                <div className="absolute top-0 right-0 mt-2 mr-2 bg-green-500 text-white px-3 py-1 rounded shadow-lg animate-fade-in-out">
                  Produit ajouté !
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fade-in-out {
            0% { opacity: 0; transform: translateY(-10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-in-out {
            animation: fade-in-out 1.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetail;
