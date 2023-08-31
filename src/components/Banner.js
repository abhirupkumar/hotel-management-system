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
                <img alt="banner1" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fHww&w=1000&q=80" />
                <img alt="banner2" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" />
                <img alt="banner3" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.tajhotels.com/content/dam/luxury/tajbengal/16x7/66605233-H1-TBK_Poolside_13503__CMYK-16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" />
                <img alt="banner4" className="lg:h-[90vh] md:h-[70vh] sm:h-[50vh] w-full h-[200px] mx-auto" src="https://www.ohotelsindia.com/pune/images/13c6386862540c41822c39464b130b65.jpg" />
            </AliceCarousel>

        </div>
    )
}

export default Banner
