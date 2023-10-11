import React from 'react'
import { TbHotelService } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import hotels from "../hotels.json";

const Hotels = () => {

    const truncate = (str) => {
        return str.length > 70 ? str.substring(0, 70) + "..." : str;
    }

    const truncate2 = (str) => {
        return str.length > 350 ? str.substring(0, 350) + "..." : str;
    }

    const truncate3 = (str) => {
        return str.length > 120 ? str.substring(0, 120) + "..." : str;
    }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
            <h1 className='text-2xl font-semibold mt-10 mb-6'>Explore Our Hotels</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                {hotels.map((hotel, index) => <div key={index} className="md:max-w-none md:w-[85vw] md:h-[20rem] w-auto max-w-[22rem] mx-auto mb-8 flex md:flex-row flex-col shadow-lg bg-white">
                    <img src={hotel.img} alt="hotel" className="object-cover object-center w-full md:h-[20rem] md:w-[30%] h-50 " />
                    <div className="flex md:flex-row flex-col justify-between h-fit p-4 space-y-4 md:justify-start">
                        <div className="flex md:flex-row flex-col space-y-2">
                            <div className="flex flex-col space-y-2 sm:mx-4">
                                <h2 className="md:text-2xl text-lg font-semibold">{hotel.title}</h2>
                                <div className='w-full flex md:flex-row flex-col md:space-x-6'>
                                    <div className='w-full space-y-2'>
                                        <div className='flex items-center space-x-1'>
                                            <CiLocationOn className='text-md font-bold text-orange-400' />
                                            <p className="md:text-sm text-xs text-orange-400 underline">{hotel.location}</p>
                                        </div>
                                        <p className="xl:block hidden text-sm !mb-6 text-gray-500">{truncate2(hotel.desc)}</p>
                                        <p className="xl:hidden md:block hidden text-xs !mb-6 text-gray-500">{truncate3(hotel.desc)}</p>
                                        <p className="md:hidden block text-xs !mb-6 text-gray-500">{truncate(hotel.desc)}</p>
                                    </div>
                                    <div className='w-full space-y-2'>
                                        {hotel.features.map((feature, index) => <div key={index} className='flex items-center space-x-1'>
                                            <TbHotelService className='text-md font-medium' />
                                            <p className="lg:text-sm text-xs">{feature}</p>
                                        </div>)}
                                        <div className='w-full flex justify-end'>
                                            <Link rel="noopener noreferrer" to={`${process.env.REACT_APP_HOST}/hotel/${hotel.slug}`} className='text-blue-600 border-2 border-blue-600 md:p-2 p-1 text-sm rounded-md'>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Hotels
