import React from 'react'

const AboutPage = () => {
    return (
        <div className='flex flex-col md:my-12 my-6 md:mx-16 mx-4 items-start min-h-screen space-y-6'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Welcome to The Royal Panorama</h1>
                <span className='font-medium text-gray-700'>At The Royal Panorama, we believe that every journey should be an unforgettable experience. Our mission is to provide you with the perfect blend of luxury, comfort, and hospitality in some of the most vibrant cities in India. With hotels in Mumbai, New Delhi, Chennai, Kolkata, Jaipur, and Amritsar, we offer a panoramic view of India's rich culture, history, and diversity.</span>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Our Story</h1>
                <span className='font-medium text-gray-700'>The Royal Panorama is the brainchild of a group of passionate individuals who shared a common vision - to create a haven for travelers seeking not just accommodation, but an immersive experience. Our journey began with a single hotel and a commitment to excellence. Today, we are proud to offer our hospitality in six iconic Indian cities, each with its own unique charm.</span>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Our Philosophy</h1>
                <span className='font-medium text-gray-700'>At The Royal Panorama, we believe in the art of hospitality. We understand that your stay with us is more than just a reservation; it's a moment in time that deserves to be cherished. That's why we are dedicated to providing you with the utmost comfort, convenience, and a touch of luxury in every aspect of your stay.</span>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Our Locations</h1>
                <span className='font-medium text-gray-700'>Explore the beauty and diversity of India's top cities while staying at The Royal Panorama. From the bustling streets of Mumbai to the historical grandeur of Jaipur, each of our locations has been carefully selected to offer you a glimpse into the heart of the city.</span>
                <ul className='list-disc mx-10'>
                    <li className='text-gray-700'><b>Mumbai</b>: Experience the energy of India's financial capital and enjoy stunning views of the Arabian Sea from our waterfront property.</li>
                    <li className='text-gray-700'><b>New Delhi</b>: Immerse yourself in the nation's capital with easy access to historic landmarks, government offices, and vibrant markets.</li>
                    <li className='text-gray-700'><b>Chennai</b>: Discover the cultural richness of South India while staying in the heart of Chennai's cultural and business district.</li>
                    <li className='text-gray-700'><b>Kolkara</b>: Experience the cultural capital of India with our hotel located near iconic landmarks and colonial-era architecture.</li>
                    <li className='text-gray-700'><b>Jaipur</b>: Get lost in the royal heritage of Rajasthan with our Jaipur property, offering a glimpse into the grandeur of the past.</li>
                    <li className='text-gray-700'><b>Amritsar</b>: Explore the spiritual and culinary delights of Punjab with our hotel located near the Golden Temple and local markets.</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Our Commitment</h1>
                <span className='font-medium text-gray-700'>Our commitment to your satisfaction is unwavering. Whether you're traveling for business or leisure, we strive to exceed your expectations at every turn. From comfortable rooms and delectable cuisine to world-class amenities and personalized service, we're here to make your stay truly memorable.</span>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold mb-4'>Contact Us</h1>
                <span className='font-medium text-gray-700'>The Royal Panorama is more than just a hotel; it's your gateway to an incredible Indian experience. Contact us today to book your stay, and let us be a part of your journey.
                    We look forward to welcoming you to The Royal Panorama, where every stay is a royal experience.</span>
            </div>
        </div>
    )
}

export default AboutPage
