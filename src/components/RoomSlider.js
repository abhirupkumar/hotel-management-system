import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { PiPlaceholder } from 'react-icons/pi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const responsive = {
    1326: {
        items: 3,
    },
    540: {
        items: 2,
    },
    0: {
        items: 1,
    }
};

const RoomSlider = ({ rooms, hotel }) => {

    const truncate = (str) => {
        return str.length > 100 ? str.substring(0, 100) + "..." : str;
    }

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute right-0 top-[45%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute left-0 top-[45%]" />
    };

    return (
        <div className='flex flex-wrap max-w-[1100px] w-full justify-around'>
            <AliceCarousel
                responsive={responsive}
                mouseTracking
                infinite
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
                {rooms.map((item, index) => <div key={index} className="md:max-w-[20rem] max-w-[15rem] mx-auto mb-8 shadow-lg">
                    <img src={item.img} alt="" className="object-cover object-center w-full md:h-60 h-50 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between h-[20rem] p-4 space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold tracki">{item.title}</h2>
                            <p className="text-sm">{truncate(item.desc)}</p>
                            <div className='flex items-center space-x-1'>
                                <PiPlaceholder className='text-lg font-medium' />
                                <p className="text-sm">{item.area} Sq Mt</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <AiOutlineWifi className='text-lg font-medium' />
                                <p className="text-sm">Inclusive WiFi</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <BsPeopleFill className='text-lg font-medium' />
                                <p className="text-sm">Up to {item.noOfPeople} guests</p>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <FaBed className='text-lg font-medium' />
                                <p className="text-sm">{item.bedsize}</p>
                            </div>
                            <p className="text-sm md:flex hidden">{item.feature}</p>
                        </div>
                        <div className='flex flex-1 justify-between items-center'>
                            <Link rel="noopener noreferrer" to={`${process.env.REACT_APP_HOST}/hotel/${hotel.slug}/rooms-and-suites?id=${item.roomId}`} className='text-blue-600 border-2 border-blue-600 md:p-2 p-1 text-sm rounded-md'>View Details</Link>
                            <p className='text-sm'>₹{item.price} / night</p>
                        </div>
                    </div>
                </div>)}
            </AliceCarousel>
        </div>
    )
}

export default RoomSlider
