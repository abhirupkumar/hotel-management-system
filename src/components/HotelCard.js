import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { TbHotelService } from 'react-icons/tb'

const HotelCard = ({ hotel }) => {
    return (
        <div className='flex flex-col bg-white my-16 w-[90vw] rounded-md p-6' style={{
            boxShadow: '1px 1px 4px 2px rgba(0,0,0,.2)'
        }}>
            <h1 className='text-4xl font-semibold mb-4'>{hotel.title}</h1>
            <div className='flex sm:flex-row sm:justify-between flex-col w-full'>
                <div className='flex flex-col w-full space-y-4'>
                    <div className='flex flex-col w-full space-y-2'>
                        <p className='pl-1 font-semibold'>{hotel.stars} star Hotel in {hotel.place}</p>
                        <a href={`https://www.google.com/maps/search/${hotel.location}`} target="_blank" className='flex items-center space-x-1 cursor-pointer'>
                            <CiLocationOn className='font-bold text-orange-400' />
                            <p className="text-xs font-extralight text-orange-400 underline">{hotel.location}</p>
                        </a>
                        <div className='flex flex-col w-full space-y-1'>
                            <div className='flex items-center space-x-1'>
                                <BsTelephone className='font-bold text-gray-500' />
                                <p className="text-xs font-extralight text-gray-500">+91 22-6665 3366 /For Room Reservations : +91 22-6480 4425</p>
                            </div>
                            <a href="mailto:reservation.royal@panorama.com" className='flex items-center space-x-1 cursor-pointer'>
                                <AiOutlineMail className='font-bold text-orange-400' />
                                <p className="text-xs font-extralight text-orange-400 underline">reservation.royal@panorama.com</p>
                            </a>
                        </div>
                        <p className='text-sm !mt-3'>{hotel.desc}</p>
                        <div className='flex flex-col w-full space-y-2 !mt-4'>
                            <h1>Hotel Highlights</h1>
                            <div className='flex flex-wrap w-full space-y-1'>
                                {hotel.features.map((feature, index) => <div key={index} className='flex items-center space-x-1 mr-4'>
                                    <TbHotelService className='text-md font-medium' />
                                    <p className="text-sm text-gray-500">{feature}</p>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full'></div>
            </div>
        </div>
    )
}

export default HotelCard
