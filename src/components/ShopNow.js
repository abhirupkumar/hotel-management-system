import React from 'react'
import { Link } from 'react-router-dom'

const ShopNow = () => {
    return (
        <div className='sm:bg-[rgba(0,0,0,.5)] sm:py-[4rem] sm:px-[3rem] absolute md:top-[30%] top-[20%] z-20 flex flex-col items-center space-y-4'>
            <h1 className='sm:block hidden text-[35px] font-medium text-white'>Luxurious Rooms</h1>
            <div className='sm:block hidden bg-[#5656f1] h-[5px] my-[1.7rem] w-[10rem]'></div>
            <p className='sm:block hidden text-lg text-white'>Deluxe Rooms Starting At Rs. 15000/-</p>
            <Link className="flex mr-2 text-white border-0 py-2 px-3 focus:outline-none bg-[#1a4ffd] hover:bg-[#1440d3] rounded sm:text-base sm:font-medium text-xs" to="rooms">Checkout Our Hotels</Link>
        </div>
    )
}

export default ShopNow
