import React from 'react';
import RoomSlider from '../components/RoomSlider';

const rooms = [
    {
        _id: "68192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Grand architecture, spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "68192H72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "65192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "78192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "64192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "68192d72D92NB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
    },
    {
        _id: "68192d72D92KB192HDK12NC19",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel-room',
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

const Rooms = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://hips.hearstapps.com/bestproducts/assets/18/03/1516295489-vale-garden-residence.jpg" />
            {hotels.map((hotel, index) => <div key={index} className='flex flex-col w-full items-center justify-center'>
                <h1 className='text-2xl font-semibold mt-10 mb-6'>{hotel.title}</h1>
                <RoomSlider rooms={rooms} hotel={hotel} />
            </div>)}
        </div>
    )
}

export default Rooms
