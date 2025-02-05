// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import fuel from "@/app/section1/fuel.png";
// import stering from "@/app/section1/Stering wheel.png";
// import user from "@/app/section1/profile.png";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// const Section1 = () => {
//   const [wishlist, setWishlist] = useState<string[]>([]); // Product IDs
//   const [popularcars, setPopularCars] = useState<any[]>([]); // All car data

//   // Fetch popular cars data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type == "Popularcar"]`;
//       const data = await client.fetch(query);
//       setPopularCars(data);
//     };

//     fetchData();

//     // Load wishlist from localStorage
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
//   }, []);

//   // Handle Add/Remove from Wishlist
//   const toggleWishlist = (e: any, productId: string) => {
//     e.preventDefault();
//     setWishlist((prevWishlist) => {
//       const updatedWishlist = prevWishlist.includes(productId)
//         ? prevWishlist.filter((id) => id !== productId) // Remove
//         : [...prevWishlist, productId]; // Add

//       // Store the updated wishlist in localStorage
//       localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//       return updatedWishlist;
//     });
//   };

//   return (
//     <div className="px-6 py-8 bg-[#F6F7F9]">
//       {/* Section Header */}
//       <div className="flex justify-between items-center px-3">
//         <h1 className="font-semibold text-[16px] text-gray-500">
//           Popular Car
//         </h1>
//         <Link href={"/categoryPage"}>
//           <h1 className="font-semibold text-[16px] text-blue-600 hover:underline cursor-pointer">
//             View All
//           </h1>
//         </Link>
//       </div>

//       {/* Cars Grid - 4 columns on large screens */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//         {popularcars.map((r: any, index: number) => (
//           <Link key={index} href={`/detailcars/popularcars/${r._id}`}>
//             <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
//               {/* Car Type */}
//               <h1 className="text-gray-500 font-medium">{r._type}</h1>

//               {/* Car Name & Wishlist Button */}
//               <div className="flex justify-between items-center mt-2">
//                 <h1 className="font-bold text-gray-800 text-lg">{r.name}</h1>
//                 <button
//                   onClick={(e) => toggleWishlist(e, r._id)}
//                   className={`text-2xl ${
//                     wishlist.includes(r._id) ? "text-red-500" : "text-gray-400"
//                   }`}
//                 >
//                   ♥
//                 </button>
//               </div>

//               {/* Car Image */}
//               <div className="flex justify-center my-4">
//                 <Image
//                   src={urlFor(r.image).url()}
//                   alt="Car Image"
//                   width={200}
//                   height={140}
//                   className="object-contain"
//                 />
//               </div>

//               {/* Specifications */}
//               <div className="flex justify-between text-gray-600 text-sm">
//                 <div className="flex gap-1 items-center">
//                   <Image src={fuel} alt="Fuel" width={20} height={20} />
//                   <span>{r.fuelCapacity}</span>
//                 </div>
//                 <div className="flex gap-1 items-center">
//                   <Image src={stering} alt="Steering" width={20} height={20} />
//                   <span>{r.transmission}</span>
//                 </div>
//                 <div className="flex gap-1 items-center">
//                   <Image src={user} alt="Seats" width={20} height={20} />
//                   <span>{r.seatingCapacity}</span>
//                 </div>
//               </div>

//               {/* Price & Rent Button */}
//               <div className="flex justify-between items-center mt-4">
//                 <h1 className="font-bold text-lg">
//                   {r.pricePerDay}/
//                   <span className="text-sm text-gray-500">day</span>
//                 </h1>
//                 <Link href={`/billing/popularcars/${r._id}`}>
//                   <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition">
//                     Rent Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section1;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fuel from "@/app/section1/fuel.png";
import stering from "@/app/section1/Stering wheel.png";
import user from "@/app/section1/profile.png";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Section1 = () => {
  const [wishlist, setWishlist] = useState<string[]>([]); // Product IDs
  const [popularcars, setPopularCars] = useState<any[]>([]); // All car data

  // Fetch popular cars data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "Popularcar"]`;
      const data = await client.fetch(query);
      setPopularCars(data);
    };

    fetchData();

    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, []);

  // Handle Add/Remove from Wishlist
  const toggleWishlist = (e: any, productId: string) => {
    e.preventDefault();
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove
        : [...prevWishlist, productId]; // Add

      // Store the updated wishlist in localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <div className="px-6 py-8 bg-[#F6F7F9]">
      {/* Section Header */}
      <div className="flex justify-between items-center px-3">
        <h1 className="font-semibold text-[16px] text-gray-500">
          Popular Car
        </h1>
        <Link href={"/categoryPage"}>
          <h1 className="font-semibold text-[16px] text-blue-600 hover:underline cursor-pointer">
            View All
          </h1>
        </Link>
      </div>

      {/* Cars Grid - 4 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {popularcars.map((r: any, index: number) => (
          <Link key={index} href={`/detailcars/Popularcar/${r._id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              {/* Car Type */}
              <h1 className="text-gray-500 font-medium">{r._type}</h1>

              {/* Car Name & Wishlist Button */}
              <div className="flex justify-between items-center mt-2">
                <h1 className="font-bold text-gray-800 text-lg">{r.name}</h1>
                <button
                  onClick={(e) => toggleWishlist(e, r._id)}
                  className={`text-2xl ${
                    wishlist.includes(r._id) ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  ♥
                </button>
              </div>

              {/* Car Image */}
              <div className="flex justify-center my-4">
                <Image
                  src={urlFor(r.image).url()}
                  alt="Car Image"
                  width={200}
                  height={140}
                  className="object-contain"
                />
              </div>

              {/* Specifications */}
              <div className="flex justify-between text-gray-600 text-sm">
                <div className="flex gap-1 items-center">
                  <Image src={fuel} alt="Fuel" width={20} height={20} />
                  <span>{r.fuelCapacity}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={stering} alt="Steering" width={20} height={20} />
                  <span>{r.transmission}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={user} alt="Seats" width={20} height={20} />
                  <span>{r.seatingCapacity}</span>
                </div>
              </div>

              {/* Price & Rent Button */}
              <div className="flex justify-between items-center mt-4">
                <h1 className="font-bold text-lg">
                  {r.pricePerDay}/
                  <span className="text-sm text-gray-500">day</span>
                </h1>
                <Link href={`/billing/Popularcar/${r._id}`}>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section1;
