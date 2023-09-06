import React from 'react'
import Banner from '../components/Banner'
import ShopNow from '../components/ShopNow'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
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

const responsive = {
  1702: {
    items: 5,
  },
  1326: {
    items: 4,
  },
  982: {
    items: 3,
  },
  540: {
    items: 2,
  },
  0: {
    items: 1,
  }
};

const Page = () => {

  const renderNextButton = ({ isDisabled }) => {
    return <RiArrowRightSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute right-0 top-[40%]" />
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <RiArrowLeftSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute left-0 top-[40%]" />
  };

  return (
    <div className='flex flex-col items-center justify-center max-w-[2000px] mx-auto'>
      <div className='flex flex-col items-center w-full'>
        <Banner />
        <ShopNow />
        <div className='w-full flex flex-col items-center space-y-8 mt-6 mb-12'>
          <h1 className='text-4xl font-medium text-gray-700'>EXPLORE OUR HOTELS</h1>
          <div className='flex flex-wrap w-full justify-around'>
            <AliceCarousel
              responsive={responsive}
              mouseTracking
              controlsStrategy={"default"}
              autoPlayStrategy='all'
              autoPlayInterval={1000}
              disableDotsControls
              keyboardNavigation
              style={{
                width: "100%",
                justifyContent: "center",
              }}
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}>
              {hotels.map((hotel, index) => <div key={index} className="md:max-w-[20rem] max-w-[15rem] mx-auto mb-8 shadow-md bg-white">
                <img src={hotel.img} alt={`${hotel.place}-hotel`} className="object-cover object-center w-full md:h-[22rem] h-[20rem] dark:bg-gray-500" />
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-semibold">{hotel.place}</h2>
                  <Link rel="noopener noreferrer" to={`${process.env.REACT_APP_HOST}/hotel/${hotel.slug}`} className='bg-blue-600 hover:bg-blue-500 md:p-2 p-1 text-sm text-white rounded-md'>View Details</Link>
                </div>
              </div>)}
            </AliceCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
