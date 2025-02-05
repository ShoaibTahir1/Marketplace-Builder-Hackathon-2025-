// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";
// import Dropoff from './Dropoff';
// import Pickoff from './Pickoff';
// import {Card} from "@/components/ui/Card";
// import Section1 from "./Section1";
// import Section2 from "./Section2";


// export default function HeroSection() {
//   useEffect(() => {
//     const sections = document.querySelectorAll(
//       "#block1, #block2, #block3, #block4");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // Only add the animate class when the element is in view
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     ); // 10% visibility

//     sections.forEach((section) => observer.observe(section));

//     // Cleanup the observer when the component unmounts
//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//       {/* Section 1 - Ads with buttons */}

//       <section
//         id="block1"
//         className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
//       >
//         <div className="relative flex flex-col items-center">
//         <Link href="/categoryPage">
//           <Image 
//             src={"/Ads 1.png"}
//             alt="Ad 1"
//             width={600}
//             height={360}
//             className="max-w-full"
//           />
//           </Link >
        
//         </div>

//         <div className="relative flex flex-col items-center">
//         <Link href="/categoryPage">
//           <Image
//             src={"/Ads 2.png"}
//             alt="Ad 2"
//             width={600}
//             height={360}
//             className="max-w-full"
//           />
//              </Link >
//         </div>
//       </section>

//       <section
//         id="block2"
//         className='px-[40px] py-[32px] flex flex-col lg:flex-row justify-between bg-[#F6F7F9]'>
      
//         {/* Pickoff */}
        
//         <Pickoff />

//         {/* switch */}
//         <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
//           <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px]" />
//         </div>
    
//         {/* Dropoff */}
//         <Dropoff />
//       </section>

//       {/* Popular car  */}
//       <section id="block3">
   
//         <div >
//           <Card >
//          <Section1 />
//           </Card>
//         </div>
//       </section>

//       {/* Recommendation car */}
//       <section id="block4" >

//       <div >
//           <Card >
//          <Section2 />
//           </Card>
//         </div>
//       </section>


//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Dropoff from './Dropoff';
import Pickoff from './Pickup';
import { Card } from "@/components/ui/Card";
import Section1 from "./Section1";
import Section2 from "./Section2";
import swap from '@/app/assets/details/Swap.png'

export default function HeroSection() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#block1, #block2, #block3, #block4"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add the animate class when the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 } // 10% visibility
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 - Ads with buttons */}
      <section
        id="block1"
        className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
      >
        <div className="relative flex flex-col items-center w-full sm:w-1/2">
          <Link href="/categoryPage">
            <Image 
              src={"/Ads 1.png"}
              alt="Ad 1"
              width={600}
              height={360}
              className="max-w-full h-auto"
            />
          </Link>
        </div>

        <div className="relative flex flex-col items-center w-full sm:w-1/2">
          <Link href="/categoryPage">
            <Image
              src={"/Ads 2.png"}
              alt="Ad 2"
              width={600}
              height={360}
              className="max-w-full h-auto"
            />
          </Link>
        </div>
      </section>
<section id="block2">
         {/* div for pickup and drop off */}
    <div className='px-[40px] py-[32px] flex flex-col lg:flex-row justify-between bg-[#F6F7F9]'>
        <Pickoff />

        <div className='flex items-center justify-center'>
            <button className='bg-[rgba(53,99,233,100%)] w-fit h-fit p-3 rounded-md '><Image src={swap} alt='loading' width={30} height={30}></Image></button>
        </div>

        <Dropoff />
    </div>
    </section>
    
      {/* Popular car */}
      <section id="block3">
        <div>
          <Card>
            <Section1 />
          </Card>
        </div>
      </section>

      {/* Recommendation car */}
      <section id="block4">
        <div>
          <Card>
            <Section2 />
          </Card>
        </div>
      </section>
    </div>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect } from "react";
// import Dropoff from './Dropoff';
// import Pickoff from './Pickoff';
// import { Card } from "@/components/ui/Card";
// import Section1 from "./Section1";
// import Section2 from "./Section2";

// export default function HeroSection() {
//   useEffect(() => {
//     const sections = document.querySelectorAll(
//       "#block1, #block2, #block3, #block4"
//     );

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // Only add the animate class when the element is in view
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate");
//           }
//         });
//       },
//       { threshold: 0.1 } // 10% visibility
//     );

//     sections.forEach((section) => observer.observe(section));

//     // Cleanup the observer when the component unmounts
//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
//       {/* Section 1 - Ads with buttons */}
//       <section
//         id="block1"
//         className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
//       >
//         <div className="relative flex flex-col items-center">
//           <Link href="/categoryPage">
//             <Image 
//               src={"/Ads 1.png"}
//               alt="Ad 1"
//               width={600}
//               height={360}
//               className="max-w-full"
//             />
//           </Link>
//         </div>

//         <div className="relative flex flex-col items-center">
//           <Link href="/categoryPage">
//             <Image
//               src={"/Ads 2.png"}
//               alt="Ad 2"
//               width={600}
//               height={360}
//               className="max-w-full"
//             />
//           </Link>
//         </div>
//       </section>

//       <section
//         id="block2"
//          className='px-[40px] py-[32px] flex flex-col lg:flex-row justify-between bg-[#F6F7F9]'
//       >
//         {/* Pickoff */}
//         <Pickoff />

//         {/* Switch */}
//         <div className="flex items-center justify-center my-4 lg:my-0">
//           <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
//             <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]" />
//           </div>
//         </div>
    
//         {/* Dropoff */}
//         <Dropoff />
//       </section>

//       {/* Popular car */}
//       <section id="block3">
//         <div>
//           <Card>
//             <Section1 />
//           </Card>
//         </div>
//       </section>

//       {/* Recommendation car */}
//       <section id="block4">
//         <div>
//           <Card>
//             <Section2 />
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// }