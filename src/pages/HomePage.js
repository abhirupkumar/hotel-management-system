import React from 'react'
import Banner from '../components/Banner'
import ShopNow from '../components/ShopNow'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import hotels from "../hotels.json";

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
