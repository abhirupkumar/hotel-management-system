import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineDown, AiOutlineStar, AiOutlineWifi } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { PiPlaceholder } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import RoomDetails from '../components/RoomDetails';

const rooms = [
    {
        roomId: "68192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'These cozy rooms located in the historic Palace Wing are the gateway to a memorable experience. Perfect for meditation, these windowless rooms offer you complete tranquillity. Designed for our jet-setting business travellers who require silence.',
        price: 17000.0,
        area: 33,
        feature: "Grand architecture, spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "68192H72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'These rooms are located in the Palace Wing on the 2nd, 3rd and 4th floors. They exude an aura of the old-world charm and elegance. These rooms are adorned with delicate Rajput bay-windows, offering spectacular views of the poolside or the bustling Mumbai city. Includes butler service and Inclusive WiFi for four devices.',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "65192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "78192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "64192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "68192d72D92NB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
    {
        roomId: "68192d72D92KB192HDK12NC19",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?room',
    },
]

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

const HotelRoomsPage = () => {

    const { slug } = useParams();
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id") ?? null;
    const ref = useRef([]);
    const [showMore, setShowMore] = useState();
    const [showRoomDetails, setShowRoomDetails] = useState([]);
    const hotel = hotels.filter((hotel) => hotel.slug === slug)[0];

    useEffect(() => {
        if (id != null) {
            ref.current[id].scrollIntoView();
            setShowRoomDetails([id])
        }
    }, [id])

    const truncate = (str) => {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    const handleShowRoom = (roomId) => {
        if (showRoomDetails.includes(roomId)) {
            setShowRoomDetails(showRoomDetails.filter((id) => id !== roomId));
        } else {
            setShowRoomDetails([...showRoomDetails, roomId]);
        }
    }

    return (
        <div className='min-h-screen flex flex-col w-full items-center'>
            <img id="banner" alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://images.moneycontrol.com/static-mcnews/2021/04/Roof-top-pool-2-taj-goa-770x433.jpg?impolicy=website&width=770&height=431" />
            <div className='flex flex-col items-center my-14 w-full'>
                <h1 className='text-4xl font-semibold mb-6'>Guest Rooms at {hotel.title}, {hotel.place}</h1>
                <div className='flex flex-col space-y-4'>
                    <p className='text-md text-black font-thin'>Discover the story behind every pillar of {hotel.title}, overlooking the epochal beauty of India. The hotel's luxurious rooms and suites blend old-world charm and modern facilities.</p>
                    <p className='text-md text-black font-thin'>For further details, kindly contact prior to check-in at:- <b className='font-semibold'>reservation.royal@panorama.com</b></p>
                </div>
                <div className='w-full flex flex-col mt-12 justify-center items-center'>
                    {rooms.map((room, index) => <div key={index} ref={el => ref.current[room.roomId] = el} className='flex flex-col md:max-w-none md:w-[80vw] w-auto max-w-[22rem] mx-auto mb-8'>
                        <div className="w-full mx-auto flex md:flex-row flex-col bg-white">
                            <img src={room.img} alt="room" className="object-cover object-center w-full md:w-[30%] md:min-h-full h-50 " />
                            <div className="flex md:w-[70%] md:flex-row flex-col justify-between h-fit p-4 space-y-4 md:justify-start">
                                <div className="flex md:flex-row flex-col space-y-2">
                                    <div className="flex flex-col space-y-2 sm:mx-4">
                                        <h2 className="md:text-2xl text-lg font-semibold">{room.title}</h2>
                                        <div className='w-full flex flex-col space-y-4'>
                                            <div className='md:w-[80%] w-full space-y-2'>
                                                {!showMore && <p className='text-sm !mt-4'>{truncate(room.desc)}<b onClick={() => setShowMore(true)} className='font-semibold cursor-pointer text-orange-500'>Show More</b></p>}
                                                {showMore && <p className='text-sm !mt-4'>{room.desc} <b onClick={() => setShowMore(false)} className='font-semibold cursor-pointer text-orange-500'>Show Less</b></p>}
                                            </div>
                                            <div className='flex md:flex-row flex-col w-full'>
                                                <div className='flex flex-col md:w-50% w-full'>
                                                    <div className='grid md:grid-rows-2 md:grid-cols-2 items-center space-y-2 w-full'>
                                                        <div className='flex items-center space-x-1'>
                                                            <PiPlaceholder className='text-lg text-orange-500 font-medium' />
                                                            <p className="text-sm">{room.area} Sq Mt</p>
                                                        </div>
                                                        <div className='flex items-center space-x-1'>
                                                            <AiOutlineWifi className='text-lg text-orange-500 font-medium' />
                                                            <p className="text-sm">Inclusive WiFi</p>
                                                        </div>
                                                        <div className='flex items-center space-x-1'>
                                                            <BsPeopleFill className='text-lg text-orange-500 font-medium' />
                                                            <p className="text-sm">Up to {room.noOfPeople} guests</p>
                                                        </div>
                                                        <div className='flex items-center space-x-1'>
                                                            <FaBed className='text-lg font-medium text-orange-500' />
                                                            <p className="text-sm">{room.bedsize}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center !mt-4 space-x-1'>
                                                        <AiOutlineStar className='text-lg font-medium text-orange-500' />
                                                        <p className="text-sm">{room.feature}</p>
                                                    </div>
                                                    <button onClick={() => handleShowRoom(room.roomId)} className='!mt-8 p-2 w-fit font-semibold border-2 border-blue-600 flex space-x-1 items-center rounded-md'>
                                                        <p className='text-blue-600 text-sm'>ROOM DETAILS</p>
                                                        <AiOutlineDown className='text-blue-600 text-sm' />
                                                    </button>
                                                </div>
                                                <div className='md:w-1/2 w-full flex flex-col justify-end items-end'>
                                                    <p className='text-gray-800 text-2xl font-bold'>₹ {room.price}*</p>
                                                    <p className='text-gray-600 text-xs'>Starting Rate/Night</p>
                                                    <button className='text-white mt-2 font-medium border-2 border-blue-600 hover:border-blue-500 bg-blue-600 hover:bg-blue-500 py-2 px-4 text-sm rounded-md'>BOOK A STAY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showRoomDetails.includes(room.roomId) && <RoomDetails room={room} />}
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default HotelRoomsPage
