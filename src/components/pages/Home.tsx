import React from "react";
import Header from "../../components/web/Header";
import ProductGrid from "../../components/web/ProductGrid";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      <Header />

      {/* Hero (sans image) */}
      <section className="py-32 bg-white text-center px-6">
        <h1 className="font-playfair text-4xl md:text-5xl font-light tracking-wider mb-6">
          ÉLÉGANCE{" "}
          <span className="block text-2xl md:text-3xl mt-2">INTEMPORELLE</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-gray-700">
          Découvrez notre collection exclusive de vêtements raffinés, où le
          minimalisme rencontre la sophistication. Chaque pièce raconte une
          histoire d&apos;élégance moderne.
        </p>
      </section>

      {/* Section vêtements */}
      <ProductGrid
        query="clothes minimal fashion outfit"
        title="Notre Sélection"
      />
    </div>
  );
};

export default Home;
