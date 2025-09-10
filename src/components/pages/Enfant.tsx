import React from "react";
import Header from "../../components/web/Header";
import ProductGrid from "../../components/web/ProductGrid";

const Enfant: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Header />

      {/* Présentation */}
      <section className="py-16 bg-white text-center px-6">
        <h1 className="font-playfair text-4xl md:text-5xl font-light tracking-wider mb-6 mt-10">
          COLLECTION ENFANT
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-700">
          Explorez notre sélection de vêtements pour enfants : confort, style et modernité pour les plus petits.
        </p>
      </section>

      {/* Grille des produits enfants */}
      <ProductGrid query="kids fashion minimal" title="Nos Sélections Enfant" />
    </div>
  );
};

export default Enfant;
