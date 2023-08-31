import React from 'react';
import RoomSlider from '../components/RoomSlider';

const rooms = [
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Grand architecture, spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King/Twin",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King/Twin",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
    {
        title: 'Deluxe Room',
        desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        price: 5000.0,
        area: 33,
        feature: "Spacious rooms and bathrooms.",
        noOfPeople: 3,
        bedsize: "King",
        img: 'https://source.unsplash.com/random/300x300/?2',
    },
]

const hotels = [
    {
        title: "The Royal Serenity in Mumbai",
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
        title: "The Royal Nimbus in Chennai",
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
        title: "The Royal Panorama in New Delhi",
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
        title: "The Royal Taj in Kolkata",
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
        title: "The Royal Panorama in Jaipur",
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
        title: "The Royal Palace in Amritsar",
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

const Rooms = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full '>
            <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://hips.hearstapps.com/bestproducts/assets/18/03/1516295489-vale-garden-residence.jpg" />
            {hotels.map((hotel, index) => <div key={index} className='flex flex-col w-full items-center justify-center'>
                <h1 className='text-2xl font-semibold mt-10 mb-6'>{hotel.title}</h1>
                <RoomSlider rooms={rooms} />
            </div>)}
        </div>
    )
}

export default Rooms
