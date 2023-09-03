import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { TbHotelService } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const sideimages = [
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%20Suite%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%201.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%202.JPG/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Aquarius%203.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Antiques.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Art%20+%20Floral.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Bell%20Tower%20Suite%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Ballroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Ballroom%20Corridor.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Bell%20Tower%20Suite%20-%20Dining.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Bella%20Vista%20Suite%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Bell%20Tower%20Suite%20-%20Study.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Treatment%20Room%202.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Lotus%20Suite%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/La%20Pattiserie.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Lotus%20Suite%20-%20Bathroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Jiva%20Spa%20-%20Reception.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Luxury%20Grande%20City%20View%20Room%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Lotus%20Suite%20-%20Living%20Room.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/gallery/Luxury%20Grande%20City%20View%20Room%20-%20Bedroom1.JPG/jcr:content/renditions/cq5dam.web.323.323.jpeg",
]

const HotelCard = ({ hotel }) => {

    const [showMore, setShowMore] = useState(false);

    const truncate = (str) => {
        return str.length > 200 ? str.substring(0, 200) + "..." : str;
    }

    return (
        <div className='flex flex-col bg-white my-16 w-[90vw] rounded-md px-8 pt-12 pb-14 shadow-lg'>
            <h1 className='text-4xl font-semibold mb-4'>{hotel.title}</h1>
            <div className='flex flex-row justify-between w-full'>
                <div id="hotelDetails" className='flex flex-col w-full space-y-4'>
                    <div className='flex flex-col w-full space-y-2'>
                        <p className='pl-1 font-semibold'>{hotel.stars} star Hotel in {hotel.place}</p>
                        <a href={`https://www.google.com/maps/search/${hotel.location}`} target="_blank" rel="noreferrer" className='flex items-center space-x-1 cursor-pointer'>
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
                        {!showMore && <p className='text-sm !mt-4'>{truncate(hotel.desc)}<b onClick={() => setShowMore(true)} className='font-semibold cursor-pointer text-orange-500'>Show More</b></p>}
                        {showMore && <p className='text-sm !mt-4'>{hotel.desc} <b onClick={() => setShowMore(false)} className='font-semibold cursor-pointer text-orange-500'>Show Less</b></p>}
                        <div className='flex flex-col w-full space-y-2 !mt-8'>
                            <h1 className='font-bold'>Hotel Highlights</h1>
                            <div className='flex flex-wrap items-center w-full space-y-2'>
                                {hotel.features.map((feature, index) => <div key={index} className='flex items-center w-1/2 space-x-1'>
                                    <TbHotelService className='text-lg font-medium w-[15%] text-orange-500' />
                                    <p className="text-sm text-black w-[85%]">{feature}</p>
                                </div>)}
                            </div>
                        </div>
                        <div className='flex flex-col w-full space-y-2 !mt-8'>
                            <h1 className='font-bold'>Hotel Policies</h1>
                            <div className='flex flex-col space-y-2 ml-6'>
                                <p className="text-sm text-black">Check-in time: 1400 hrs</p>
                                <p className="text-sm text-black">Check-out time: 1200 hrs</p>
                                <p className="text-sm text-black">Early check-in and late check-out on request.</p>
                                <p className="text-sm text-black">We accept American Express, Diner's Club, Master Card, Visa, JCB International.</p>
                                <p className="text-sm text-black">Pets are not allowed.</p>
                            </div>
                        </div>
                        <div className='flex flex-col w-full space-y-2 !mt-8'>
                            <h1 className='font-bold'>Hotel Essentials</h1>
                            <div className='flex text-black w-full space-x-1'>
                                <Link to={`${process.env.REACT_APP_HOST}/hotel/${hotel.slug}/rooms-and-suites`} className='underline text-xs !text-blue-600'>View Rooms</Link>
                                <p className='text-xs'>|</p>
                                <p className='text-xs'>GSTIN : 38ABBCX3957G1Z9</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`md:flex hidden w-full justify-center flex-wrap ${showMore ? 'h-[1000px]' : 'h-[600px]'} overflow-y-scroll -mt-4`}>
                    {sideimages.map((image, index) => <img key={index} src={image} alt={hotel.title} className='object-cover m-2 h-[16rem] w-[16rem]' />)}
                </div>
            </div>
        </div>
    )
}

export default HotelCard
