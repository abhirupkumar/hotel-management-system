import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { TbHotelService } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';

const hotels = [
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
    {
        title: "The Taj Hotel in Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai",
        desc: "Situated in the mixed-used complex across 34 acres of Mumbai’s eastern shoreline about 8 Km from the international airport, Taj The Trees is the epitome of architectural brilliance and pays homage to the industrial heritage of the city. With purity and precision, the hotel depicts contemporary Indian crafts, welcomes you to a world of unparalleled rejuvenation, and lays forth a calm oasis of luxury that reflects the city’s inimitable character.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
    },
]

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

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute right-0 top-[40%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute left-0 top-[40%]" />
    };

    return (
        <div className='flex flex-col items-center justify-center font-mono w-full bg-gray-100'>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.ohotelsindia.com/pune/images/13c6386862540c41822c39464b130b65.jpg" />
            <h1 className='text-2xl font-semibold mt-10 mb-6'>Explore Our Hotels</h1>
            <div className='w-full flex sm:flex-col flex-row justify-center items-center'>
                {hotels.map((hotel, index) => <div key={index} className="md:max-w-none md:w-[80vw] md:h-[20rem] w-auto max-w-[22rem] mx-auto mb-8 flex md:flex-row flex-col shadow-lg bg-white">
                    <img src={hotel.img} alt="hotel" className="object-cover object-center w-full md:h-[20rem] md:w-[30%] h-50 " />
                    <div className="flex md:flex-row flex-col justify-between h-fit p-4 space-y-4 md:justify-start">
                        <div className="flex md:flex-row flex-col space-y-2">
                            <div className="flex flex-col space-y-2 sm:mx-4">
                                <h2 className="md:text-2xl text-lg font-semibold">{hotel.title}</h2>
                                <div className='w-full flex md:flex-row flex-col md:space-x-6'>
                                    <div className='w-full space-y-2'>
                                        <div className='flex items-center space-x-1'>
                                            <CiLocationOn className='text-md font-bold text-orange-300' />
                                            <p className="md:text-sm text-xs text-gray-500">{hotel.location}</p>
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
                                            <button className='text-blue-600 border-2 border-blue-600 md:p-2 p-1 text-sm rounded-md'>View Details</button>
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
