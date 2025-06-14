import React, { useState } from "react";
import productsData from "../data/products.json";

function ProductCard({ product }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[180px] h-[260px] bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg transition duration-300 flex-shrink-0 flex flex-col"
    >
      <div className="w-full h-[140px] bg-gray-50 dark:bg-gray-700 rounded-t-xl overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img
            alt={product.name}
            src={product.image}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

      <div className="flex-1 p-3 flex flex-col">
        <div className="text-center font-medium text-gray-900 dark:text-white text-sm break-words overflow-y-auto h-[44px] px-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
          {product.name}
        </div>
        <div className="mt-auto text-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
          {product.price}
        </div>
      </div>
    </a>
  );
}

export default function Store() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleViewAll = (category) => setActiveCategory(category);
  const handleBack = () => setActiveCategory(null);

  const isDataEmpty = !productsData || Object.keys(productsData).length === 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
        Store
      </h1>

      {isDataEmpty ? (
        <div className="text-center text-gray-500 dark:text-gray-400 text-lg">
          ⚠️ Products coming soon!
        </div>
      ) : activeCategory ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {activeCategory}
            </h2>
            <button
              onClick={handleBack}
              className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
            >
              ← Back
            </button>
          </div>

          {/* View‑All: left‑aligned rows, fixed‑size cards */}
          <div className="flex flex-wrap justify-start gap-4">
            {productsData[activeCategory]?.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 w-full">
                Products coming soon!
              </div>
            ) : (
              productsData[activeCategory].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </>
      ) : (
        Object.entries(productsData).map(([category, items]) => {
          const showViewAll = items.length > 4;
          const productsToShow = items.slice(0, 4);

          return (
            <section key={category} className="mb-12">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {category}
              </h2>

              <div className="flex space-x-4 overflow-x-auto pb-2">
                {productsToShow.map((product) => (
                  <div key={product.id} className="w-[180px] flex-shrink-0">
                    <ProductCard product={product} />
                  </div>
                ))}

                {showViewAll && (
                  <button
                    onClick={() => handleViewAll(category)}
                    className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex-shrink-0 self-center pl-2"
                  >
                    View All →
                  </button>
                )}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
