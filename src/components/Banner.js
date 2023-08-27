import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Banner = () => {

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute right-0 top-[45%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="bg-[rgba(0,0,0,.5)] text-5xl cursor-pointer text-white absolute left-0 top-[45%]" />
    };

    return (
        <div className='w-full mx-auto'>
            <AliceCarousel
                autoPlay={true}
                playButtonEnabled={true}
                infinite={true}
                autoPlayInterval={4000}
                disableDotsControls={true}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}>
                <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=" />
                <img alt="banner2" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" />
                <img alt="banner3" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.eroshotels.co.in/wp-content/uploads/2018/04/606x368.jpg" />
                <img alt="banner4" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.ohotelsindia.com/pune/images/13c6386862540c41822c39464b130b65.jpg" />
            </AliceCarousel>

        </div>
    )
}

export default Banner
