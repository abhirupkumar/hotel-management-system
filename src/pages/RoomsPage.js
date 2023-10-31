import React from 'react';
import RoomSlider from '../components/RoomSlider';
import hotels from "../hotels.json";

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
        img: 'https://source.unsplash.com/random/300x300/?room',
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

const Rooms = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://hips.hearstapps.com/bestproducts/assets/18/03/1516295489-vale-garden-residence.jpg" />
            {hotels.map((hotel, index) => {
                console.log(hotel)
                return <div key={index} className='flex flex-col w-full items-center justify-center'>
                    <h1 className='text-2xl font-semibold mt-10 mb-6'>{hotel.title}</h1>
                    <RoomSlider rooms={rooms} hotel={hotel} />
                </div>
            })}
        </div>
    )
}

export default Rooms
