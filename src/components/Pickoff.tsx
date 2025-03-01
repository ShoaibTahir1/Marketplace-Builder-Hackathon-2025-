"use client"
import React from 'react';
import { useState } from 'react';


const Pickup = () => {

    const [isPickUp, setIsPickUp] = useState(false);

    const locations : string[] = [
        "Nazimabad",
        "Saddar",
        "DHA",
        "Garden",
        "Aga Khan Hospital",
        "FB Area",
        "Gulshan-e-Iqbal",
        "Gulistan-e-Johar",
        "Liaquatabad",
        "SITE Area",
        "Malir",
        "Landhi",
        "Shahrah-e-Faisal",
        "Sindhi Muslim Society",
        "Bahadurabad",
        "Tariq Road"
    ];

  return (
    <div className='lg:w-[45%] px-8 py-3 bg-white'>
            <div className='flex gap-4'>
                <input type="radio" 
                checked={isPickUp}
                onChange={() => setIsPickUp(!isPickUp)}
                />
               <h1 className='font-bold'>Pick - Up</h1>
            </div>

            <div className={`justify-center md:flex md:justify-between mt-2 gap-3 
            ${isPickUp ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
                <div>
                    <label className='font-bold'>Locations</label>
                    <select disabled={!isPickUp} className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1'>
                                <option value="">Select your Location</option>
                                {locations.map((l, index:number)=>(
                                    <option key={index} value={l}>{l}</option>
                                ))}
                    </select>
                </div>

                <div>
                     <label className='font-bold'>Date</label>
                    <div className='flex items-center justify-between'>
                        <input disabled={!isPickUp} type="date" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
                    </div>
                </div>

                <div>
                    <label className='font-bold'>Time</label>
                    <div className='flex items-center justify-between'>
                        <input disabled={!isPickUp} type="time" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pickup

// "use client";
// import React from 'react';
// import { useState } from 'react';

// const Pickup = () => {
//     const [isPickUp, setIsPickUp] = useState(false);

//     const locations: string[] = [
//         "Nazimabad",
//         "Saddar",
//         "DHA",
//         "Garden",
//         "Aga Khan Hospital",
//         "FB Area",
//         "Gulshan-e-Iqbal",
//         "Gulistan-e-Johar",
//         "Liaquatabad",
//         "SITE Area",
//         "Malir",
//         "Landhi",
//         "Shahrah-e-Faisal",
//         "Sindhi Muslim Society",
//         "Bahadurabad",
//         "Tariq Road"
//     ];

//     return (
//         <div className='lg:w-[45%] px-4 py-3 bg-white rounded-lg shadow-md'>
//             <div className='flex items-center gap-4'>
//                 <input
//                     type="radio"
//                     checked={isPickUp}
//                     onChange={() => setIsPickUp(!isPickUp)}
//                 />
//                 <h1 className='font-bold'>Pick - Up</h1>
//             </div>

//             <div className={`mt-2 gap-3 ${isPickUp ? "opacity-100" : "opacity-50 pointer-events-none"} flex flex-col md:flex-row md:justify-between`}>
//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Locations</label>
//                     <select disabled={!isPickUp} className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1'>
//                         <option value="">Select your Location</option>
//                         {locations.map((l, index: number) => (
//                             <option key={index} value={l}>{l}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Date</label>
//                     <input disabled={!isPickUp} type="date" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
//                 </div>

//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Time</label>
//                     <input disabled={!isPickUp} type="time" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pickup;


// "use client";
// import React, { useState } from 'react';

// const Pickup = () => {
//     const [isPickUp, setIsPickUp] = useState(false);

//     const locations: string[] = [
//         "Nazimabad",
//         "Saddar",
//         "DHA",
//         "Garden",
//         "Aga Khan Hospital",
//         "FB Area",
//         "Gulshan-e-Iqbal",
//         "Gulistan-e-Johar",
//         "Liaquatabad",
//         "SITE Area",
//         "Malir",
//         "Landhi",
//         "Shahrah-e-Faisal",
//         "Sindhi Muslim Society",
//         "Bahadurabad",
//         "Tariq Road"
//     ];

//     return (
//         <div className='lg:w-[45%] w-full px-4 py-3 bg-white rounded-lg shadow-md'>
//             <div className='flex items-center gap-4'>
//                 <input
//                     type="radio"
//                     checked={isPickUp}
//                     onChange={() => setIsPickUp(!isPickUp)}
//                 />
//                 <h1 className='font-bold'>Pick - Up</h1>
//             </div>

//             <div className={`mt-2 gap-3 ${isPickUp ? "opacity-100" : "opacity-50 pointer-events-none"} flex flex-col md:flex-row md:justify-between`}>
//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Locations</label>
//                     <select disabled={!isPickUp} className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1'>
//                         <option value="">Select your Location</option>
//                         {locations.map((l, index: number) => (
//                             <option key={index} value={l}>{l}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Date</label>
//                     <input disabled={!isPickUp} type="date" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
//                 </div>

//                 <div className='flex-1 mb-2 md:mb-0'>
//                     <label className='font-bold'>Time</label>
//                     <input disabled={!isPickUp} type="time" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pickup;