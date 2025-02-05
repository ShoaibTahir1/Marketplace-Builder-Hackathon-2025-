'use client';
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<string[]>([]); // Product IDs
  const [wishlistItems, setWishlistItems] = useState<any[]>([]); // Full product data

  // Load wishlist from localStorage and fetch product details
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const productIds = JSON.parse(storedWishlist);
      setWishlist(productIds);

      const fetchWishlistItems = async () => {
        const query = `*[_type in ["Popularcar", "RecommendedCar"] && _id in ${JSON.stringify(productIds)}]`;
        const data = await client.fetch(query);
        setWishlistItems(data);
      };
      fetchWishlistItems();
    }
  }, []);

  return (
    <div className="px-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-5 transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Type:</span> {item.type}</p>
              <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Description:</span> {item.description}</p>
              <p className="text-gray-600 text-sm mb-2"><span className="font-semibold">Seating Capacity:</span> {item.seatingCapacity}</p>
              <p className="text-gray-600 text-sm mb-4"><span className="font-semibold">Fuel Capacity:</span> {item.fuelCapacity}</p>
              <div className="flex justify-center">
                <Image
                  src={urlFor(item.image).url()}
                  alt="Car Image"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 text-lg text-center mt-10">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
