"use client";

import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

//product data
const products = [
  {
    id: 1,
    name: "Pretty Black Bouquet",
    price: "1000.00",
    images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
    description: "Elegant black bouquet with fresh roses."
  },
  {
    id: 2,
    name: "Pretty Black Bouquet",
    price: "1000.00",
    images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
    description: "Elegant black bouquet with fresh roses."
  },
  {
    id: 3,
    name: "Pretty Black Bouquet",
    price: "1000.00",
    images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
    description: "Elegant black bouquet with fresh roses."
  },
  {
    id: 4,
    name: "Pretty Black Bouquet",
    price: "1000.00",
    images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
    description: "Elegant black bouquet with fresh roses."
  },
  {
    id: 5,
    name: "Pretty Black Bouquet",
    price: "1000.00",
    images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
    description: "Elegant black bouquet with fresh roses."
  },
];

function Flora() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="container mx-auto text-center mt-10 mb-10">

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition duration-300"
            onClick={() => { setSelectedProduct(product); setCurrentImageIndex(0); }}
          >
            <img src={product.images[0]} alt={product.name} className="w-full h-60 object-cover rounded-lg" />
            <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal with Responsive Design */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-white p-2 rounded-xl shadow-xl relative
      w-[90%] sm:w-[75%] lg:w-[60%] max-w-4xl h-auto">

            <a href="http://wa.me/94728636129" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 text-black-600 text-5xl hover:text-green-600">
              <FaWhatsapp />
            </a>

            {/* Image Carousel */}
            <div className="relative">
              {/* Previous Image Button */}
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 
                    text-white p-3 rounded-full text-lg"
                onClick={handlePrevImage}
              >
                <BiChevronLeft size={32} />
              </button>

              {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-600 text-4xl hover:text-red-500"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>

              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="w-full object-cover rounded-lg 
                    h-[250px] sm:h-[350px] lg:h-[450px]"
              />

              {/* Next Image Button */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 
                    text-white p-3 rounded-full text-lg"
                onClick={handleNextImage}
              >
                <BiChevronRight size={32} />
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{selectedProduct.name}</h2>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">{selectedProduct.description}</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 text-green-600">
                Rs. {selectedProduct.price}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Flora;
