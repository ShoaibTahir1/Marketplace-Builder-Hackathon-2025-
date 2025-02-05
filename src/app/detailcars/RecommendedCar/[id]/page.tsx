import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';
import views2 from '@/app/assets/details/View 2.png';
import views3 from '@/app/assets/details/View 3.png';
import { urlFor } from '@/sanity/lib/image';
import Sidebar from "@/components/Sidebar";

export default async function dynamicpage(props: any) {
  const { id } = props.params; // Extract the dynamic route parameter

  // Query to fetch all cars
  const query = `*[ _type == "RecommendedCar"]`;
  const RecommendedCar = await client.fetch(query,{id});

  // Find the specific car by ID
  const car = RecommendedCar.find((car: any) => car._id === id);

  if (!car) {
    // Handle case when the car is not found
    return <div>Car not found!</div>;
  }

  return (
    <div className="bg-[#F6F7F9] mx-auto p-4">
      <div className='md:flex md:justify-between gap-4'>
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <div className="md:flex md:justify-between gap-6">
            
            {/* Left Section (Car Image and Details) */}
            <div className="md:w-[48%]">
              {/* Main Car Display */}
              <div className="bg-[rgba(84,166,255,100%)] h-[400px] sm:h-[350px] rounded-xl bg-[url('/BG.png')] bg-cover bg-center relative mb-4">
                <div className='p-6'>
                  <h1 className='text-white font-semibold text-[20px] w-fit'>Sports car with best design and acceleration</h1>
                  <p className='font-medium text-[14px] text-white md:w-64 mt-3'>Safety and comfort while driving a futuristic and elegant sport car</p>
                  <Link href={`/billing/Recommendedcar/${car._id}`}>
                    <button className='bg-[rgba(53,99,233,100%)] px-10 py-4 mt-5 text-white rounded-lg hover:bg-[rgba(53,99,233,90%)] transition-colors'>
                      Rent Car
                    </button>
                  </Link>
                </div>
                <div className='flex justify-center'>
                  <Image 
                    src={urlFor(car.image).url()} 
                    alt={car.name} 
                    width={280} 
                    height={160} 
                    className="w-[200px] sm:w-[230px] lg:w-[300px] object-contain"
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="lg:flex items-center justify-between mt-4 gap-4">
                <div className="w-[200px] lg:w-[230px] flex mx-auto lg:mx-0 my-2 lg:my-0">
                  <Image src={urlFor(car.image).url()} alt='loading' width={300} height={200} className="bg-[rgba(84,166,255,100%)] h-full rounded-xl bg-[url('/BG.png')] bg-cover bg-center relative p-6 w-[200px] lg:w-[230px]"></Image>
                </div>
                <Image src={views2} alt='loading' width={150} height={200} className="w-[150px] lg:w-[180px] flex mx-auto lg:mx-0 my-2 lg:my-0"></Image>
                <Image src={views3} alt='loading' width={150} height={200} className="w-[150px] lg:w-[180px] flex mx-auto lg:mx-0 my-2 lg:my-0"></Image>
              </div>
            </div>

            {/* Right Section (Car Details) */}
            <div className='mt-6 md:mt-0 md:w-[48%] p-6 bg-white rounded-xl shadow-sm'>
              <div className="space-y-6">
              <div>
                  <h1 className="uppercase font-extrabold text-4xl text-[rgba(26,32,44,100%)]">
                    {car.name}
                  </h1>
                  <div className="flex items-center gap-2 mt-4">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                    <span className="text-gray-600">440+ Reviewer</span>
                  </div>
                </div>
                <div>
                <p className="text-xl text-[rgba(89,103,128,100%)] mt-4">{car.description}</p>
               
                </div>
                

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[rgba(144,163,191,100%)] text-lg">Type</span>
                      <span className="text-[rgba(26,32,44,100%)] font-bold text-lg">{car.type}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[rgba(144,163,191,100%)] text-lg">Transmission</span>
                      <span className="text-[rgba(26,32,44,100%)] font-bold text-lg">{car.transmission}</span>
                    </div>
                  
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[rgba(144,163,191,100%)] text-lg">Capacity</span>
                      <span className="text-[rgba(26,32,44,100%)] font-bold text-lg">{car.seatingCapacity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[rgba(144,163,191,100%)] text-lg">Fuel</span>
                      <span className="text-[rgba(26,32,44,100%)] font-bold text-lg">{car.fuelCapacity}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t">
                  <div className="flex items-center gap-1">
                    <span className="text-[rgba(26,32,44,100%)] text-3xl font-bold">{car.pricePerDay}</span>
                    <span className="text-[rgba(144,163,191,100%)] text-xl">/day</span>
                  </div>
                  <Link href={`/billing/Recommendedcar/${car._id}`}>
                    <button className='bg-[#3563E9] text-white rounded-lg px-8 py-3 hover:bg-[#2851d1] transition-colors'>
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
