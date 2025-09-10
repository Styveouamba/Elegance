import React from "react";
import Header from "../../components/web/Header";
import ProductGrid from "../../components/web/ProductGrid";

const Homme: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <Header />

      {/* Présentation */}
      <section className="py-16 bg-white text-center px-6">
        <h1 className="font-playfair text-4xl md:text-5xl font-light tracking-wider mb-6 mt-10">
          COLLECTION HOMME
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-700">
          Découvrez notre sélection exclusive de vêtements pour hommes. Élégance, confort et style minimaliste.
        </p>
      </section>

      {/* Grille des produits hommes */}
      <ProductGrid query="homme fashion minimal" title="Nos Sélections Homme" />
    </div>
  );
};

export default Homme;
