import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UnsplashPhoto {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
}

interface Props {
  query: string;
  title: string;
}

const ProductGrid: React.FC<Props> = ({ query, title }) => {
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "masonry">("grid");
  const navigate = useNavigate();

  const UNSPLASH_ACCESS_KEY = "GJdlzYnZ1SME7MgDmfi8sj8yLK4cAXLDzdznQR9G-Kg";

  const fetchImages = async (reset = false) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=9&orientation=squarish&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data: UnsplashResponse = await res.json();
    setImages((prev) => (reset ? data.results : [...prev, ...data.results]));
  };

  useEffect(() => {
    setPage(1);
    fetchImages(true);
  }, [query]);

  useEffect(() => {
    if (page > 1) fetchImages();
  }, [page]);

  const handleClick = (img: UnsplashPhoto) => {
    navigate(`/product/${img.id}`, { state: { image: img } });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold">
            {title}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setView("grid")}
              className={`px-3 py-1 border rounded-md text-sm transition-colors ${
                view === "grid"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              Grille
            </button>
            <button
              onClick={() => setView("masonry")}
              className={`px-3 py-1 border rounded-md text-sm transition-colors ${
                view === "masonry"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              Masonry
            </button>
          </div>
        </div>

        {/* Affichage */}
        {view === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative bg-gray-100 rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => handleClick(img)}
              >
                <img
                  src={img.urls.small}
                  alt={img.alt_description || "Produit"}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img) => (
              <div
                key={img.id}
                className={`overflow-hidden rounded-xl bg-gray-100 cursor-pointer`}
                onClick={() => handleClick(img)}
              >
                <img
                  src={img.urls.regular}
                  alt={img.alt_description || "Produit"}
                  className="w-full mb-4 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
