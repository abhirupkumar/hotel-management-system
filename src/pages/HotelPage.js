import React from 'react';
import { useParams } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import RoomSlider from '../components/RoomSlider';
import hotelsdata from "../hotels.json";

const rooms = [
    {
        roomId: "68192d72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Grand architecture, spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel',
    },
    {
        roomId: "68192H72D92KB192HDK12NC12",
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 17000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?hotel',
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
        img: 'https://source.unsplash.com/random/300x300/?hotel',
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
        img: 'https://source.unsplash.com/random/300x300/?hotel',
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
        img: 'https://source.unsplash.com/random/300x300/?hotel',
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
        img: 'https://source.unsplash.com/random/300x300/?hotel',
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
        img: 'https://source.unsplash.com/random/300x300/?hotel',
    },
]

const Hotel = () => {

    const { slug } = useParams();

    const hotel = hotelsdata.filter((hotel) => hotel.slug === slug)[0];

    return (
        <div className='flex min-h-screen flex-col w-full items-center'>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://img.freepik.com/premium-photo/bedroom-with-view-mountains_865967-432661.jpg" />
            <div className='sm:bg-[rgba(0,0,0,.5)] sm:py-[3rem] sm:px-[3rem] absolute md:top-[30%] top-[20%] z-20 flex flex-col items-center'>
                <h1 className='sm:block hidden text-3xl font-bold text-white mb-3'>{hotel.title} in {hotel.place}</h1>
                <div className='sm:block hidden bg-[#5656f1] h-[5px] my-[1.7rem] w-[10rem]'></div>
                <p className='sm:block hidden text-lg my-4 text-white'>Experience The Luxury</p>
            </div>
            <HotelCard hotel={hotel} />
            <div className='mt-10 w-full flex flex-col items-center justify-center'>
                <h1 className='text-4xl mb-10 font-semibold text-gray-800'>Guests Room</h1>
                <RoomSlider rooms={rooms} hotel={hotel} />
            </div>
        </div>
    )
}

export default Hotel;