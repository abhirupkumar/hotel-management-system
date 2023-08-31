import React from 'react'
import { TbHotelService } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const hotels = [
    {
        title: "The Royal Serenity",
        stars: 7,
        place: "Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-serenity-in-mumbai",
    },
    {
        title: "The Royal Nimbus",
        stars: 6,
        place: "Chennai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-nimbus-in-chennai",
    },
    {
        title: "The Royal Panorama",
        stars: 5,
        place: "New Delhi",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-panorama-in-new-delhi",
    },
    {
        title: "The Royal Taj",
        stars: 5,
        place: "Kolkata",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-taj-in-kolkata",
    },
    {
        title: "The Royal Panorama",
        stars: 6,
        place: "Jaipur",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-panorama-in-jaipur",
    },
    {
        title: "The Royal Palace",
        stars: 7,
        place: "Mumbai",
        img: "https://www.tajhotels.com/content/dam/luxury/hotels/taj-mahal-tower-mumbai/images/new-images/TMT%20Exterior.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg",
        location: "Apollo Bunder, Mumbai, Maharashtra, 400 001, India",
        desc: "The Taj Mahal Palace opened in Mumbai, then Bombay, in 1903, giving birth to the country’s first harbour landmark. The recently trademarked flagship hotel overlooks the majestic Gateway of India. This legendary hotel in Mumbai has played host to kings, dignitaries and eminent personalities from across the globe, and is acknowledged as a world leader in hospitality. Each of the rooms 285 rooms & suites are a striking blend of nostalgic elegance, rich history and modern facilities. Strategically located in Mumbai’s prime historical and commercial hub, The Taj Mahal Palace is walking distance from Colaba Causeway, known for its touristy tiny roadside shops. The city’s financial hub, parliament, stadium, offices and shopping districts are all located within close proximity; as is a flourishing art and heritage precinct with must visit museums, art galleries, churches and synagogues. The airports are an hour away. For those who would like to experience fine dining in style, we host 9 of the city’s most acclaimed restaurants and bars, renowned for delectable cuisines from India, Europe, the Middle East and the Orient. Relish authentic Indian cuisine at Masala Kraft; world famous Japanese dishes at Wasabi by Morimoto; exquisite Eastern Mediterranean food at Souk and Chinese at Golden Dragon. Dine all day at Shamiana and choose from the exotic range of sumptuous desserts at La Patisserie. Unwind with a refreshing meal at Aquarius, the poolside restaurant in Mumbai; and visit the stylish Harbour Bar. Signature experiences such as the afternoon tea at Sea Lounge and private dining at the Chef’s Studio make your stay with us truly memorable. J Wellness Circle offers a soothing blend of contemporary aromatherapy massages and rejuvenating therapies. Amidst a bustling metro, the hotel invites you to an Ayurveda Sanctuary, offering holistic healing with ancient traditions. Mumbai’s original luxury hotel has 11 newly refurbished halls and venues, ideal for occasions ranging from formal meetings to elaborate weddings. The Ballroom, spacious enough for 450 guests, is perfect for conferences and grand private events. You could opt for a private dinner or yacht party if you are looking to entertain in true style. Our globally acclaimed Golden Keys Concierge would be happy to help, and caters to all your requirements in the city. Come, experience the legend.",
        features: [
            "250 Rooms and 15 Suites",
            "Grand architecture, spacious rooms and bathrooms.",
            "Easy Access to Bussiness Districts",
            "12 Km from Airport",
        ],
        slug: "the-royal-palace-in-amritsar",
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
