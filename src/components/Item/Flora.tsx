"use client";

import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

//product data
const products = [
  {
    id: 1,
    name: "Elysian Bloom",
    price: "500.00",
    images: ["/static/pkg1/red1.jpeg", "/static/pkg1/white1.jpeg", "/static/pkg1/black1.jpeg"],
    no: "1 Rose Bouquet",
    description: "A simple yet graceful touch of love."
  },
  {
    id: 2,
    name: "Trinity Charm",
    price: "900.00",
    images: ["/static/pkg2/black3.jpeg"],
    no: "3 Rose Bouquet",
    description: "Symbolizing love, friendship, and joy."
  },
  {
    id: 3,
    name: "Serene Elegance",
    price: "1800.00",
    images: ["/static/pkg3/rose7.1.jpeg", "/static/pkg3/rose7.2.jpeg", "/static/pkg3/rose7.3.jpeg"],
    no: "7 Rose Bouquet",
    description: "A bouquet of balance and beauty."
  },
  {
    id: 4,
    name: "Pretty Black Bouquet",
    price: "1900.00",
    images: ["/static/pkg4/black7.2.jpeg", "/static/pkg4/black7.1.jpeg", "/static/pkg4/black7.3.jpeg"],
    no: "7 Rose Bouquet",
    description: "Elegant black bouquet with fresh roses."
  },
  // {
  //   id: 5,
  //   name: "Pretty Black Bouquet",
  //   price: "1000.00",
  //   images: ["/static/flw1.jpeg", "/static/flw2.jpeg", "/static/flw3.jpeg"],
  //   description: "Elegant black bouquet with fresh roses."
  // },
  
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
    <div id="Shop" className="container mx-auto text-center mt-20 mb-10">
      <div className="pb-20">
        <p>
          At Lavy Store, we believe that every gift should be a reflection of elegance and charm. Our handcrafted ribbon rose bouquets and thoughtfully 
          curated gift item boxes are designed to bring a touch of luxury to your special moments. Whether celebrating love, friendship, or milestones, 
          we create gifts that illuminate beauty and leave a lasting impression.
        </p>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-md cursor-pointer"
            onClick={() => { setSelectedProduct(product); setCurrentImageIndex(0); }}
          >
            <img src={product.images[0]} alt={product.name} className="w-full h-80 object-cover rounded-lg" />
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
            <a href={`https://wa.me/94728636129?text=Hello%20Lavy%20Store,%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedProduct.name)}.%20Price:%20Rs.${selectedProduct.price}.%20Website:%20https://lavystore.netlify.app/`}
              target="_blank" rel="noopener noreferrer"
              className="absolute bottom-4 right-4 text-black-600 text-4xl hover:text-green-600"
            >
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
              <p className="text-gray-500 mt-1 text-sm sm:text-base">{selectedProduct.no}</p>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">{selectedProduct.description}</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 text-gray-600">
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
