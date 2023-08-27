import React from 'react'
import Banner from '../components/Banner'
import ShopNow from '../components/ShopNow'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[2000px] mx-auto font-mono'>
      <div className='flex flex-col items-center w-full'>
        <Banner />
        <ShopNow />
        <div className='w-full flex flex-col items-center space-y-4 mt-6 mb-12'>
          <h1 className='text-4xl font-medium text-gray-600'>EXPLORE ROOMS</h1>
          <div className='flex flex-wrap w-full justify-around space-y-4'>
            <div className="max-w-[24rem] rounded-md shadow-lg bg-gray-100">
              <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">Deluxe Room</h2>
                  <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                </div>
                <div className='flex flex-1 justify-between items-center'>
                  <button className='text-blue-600 border-2 border-blue-600 p-2 text-sm rounded-md'>Book Now</button>
                  <p className='text-sm'>₹5000 / night</p>
                </div>
              </div>
            </div>
            <div className="max-w-[24rem] rounded-md shadow-lg bg-gray-100">
              <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">Deluxe Room</h2>
                  <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                </div>
                <div className='flex flex-1 justify-between items-center'>
                  <button className='text-blue-600 border-2 border-blue-600 p-2 text-sm rounded-md'>Book Now</button>
                  <p className='text-sm'>₹5000 / night</p>
                </div>
              </div>
            </div>
            <div className="max-w-[24rem] rounded-md shadow-lg bg-gray-100">
              <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500" />
              <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">Deluxe Room</h2>
                  <p className="text-sm">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                </div>
                <div className='flex flex-1 justify-between items-center'>
                  <button className='text-blue-600 border-2 border-blue-600 p-2 text-sm rounded-md'>Book Now</button>
                  <p className='text-sm'>₹5000 / night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
