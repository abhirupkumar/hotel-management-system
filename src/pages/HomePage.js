import React from 'react'
import Banner from '../components/Banner'
import ShopNow from '../components/ShopNow'
import Footer from '../components/Footer'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const hotels = [
  {
    location: 'Mumbai',
    img: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    location: 'Chennai',
    img: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    location: 'New Delhi',
    img: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    location: 'Kolkata',
    img: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    location: 'Jaipur',
    img: 'https://source.unsplash.com/random/300x300/?2',
  },
  {
    location: 'Amritsar',
    img: 'https://source.unsplash.com/random/300x300/?2',
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
              {hotels.map((item, index) => <div key={index} className="md:max-w-[20rem] max-w-[15rem] mx-auto mb-8 shadow-md bg-white">
                <img src={item.img} alt={`${item.location} hotel`} className="object-cover object-center w-full md:h-[22rem] h-[20rem] dark:bg-gray-500" />
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-xl font-semibold">{item.location}</h2>
                  <button className='bg-blue-600 hover:bg-blue-500 md:p-2 p-1 text-sm text-white rounded-md'>View Details</button>
                </div>
              </div>)}
            </AliceCarousel>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
