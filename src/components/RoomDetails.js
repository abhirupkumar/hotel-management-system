import React from 'react'

const RoomDetails = ({ room }) => {
    return (
        <div className='flex flex-row w-full justify-around mt-1'>
            <div className='min-h-full block w-[0.35rem] bg-orange-500'></div>
            <div className='flex flex-row flex-wrap'>
                <div className='flex flex-col justify-start p-6 space-y-3 md:w-[39%]'>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-semibold'>ROOM DETAILS</h1>
                        <p className='font-thin text-sm '>{room.desc}</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-semibold'>SIZE</h1>
                        <p className='font-thin text-sm '>{room.area} Sq Mt</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-semibold'>Occupancy Details</h1>
                        <p className='font-thin text-sm '>Up to {room.noOfPeople} {room.noOfPeople > 1 ? "guests" : "guest"}</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start p-6 space-y-4 md:w-[30%] w-[50%]'>
                    <h1 className='font-semibold'>BED & BATH</h1>
                    <div className='flex flex-col'>
                        <p className='font-thin text-sm'>Infant cribs for infants aged 0-2 years available on request on inclusive basis</p>
                        <p className='font-thin text-sm'>Rollaway beds are available on additional charge on a per night basis</p>
                        <p className='font-thin text-sm'>Bath Tub</p>
                    </div>
                </div>
                <div className='flex flex-col justify-start p-6 space-y-4 md:w-[30%] w-[50%]'>
                    <h1 className='font-semibold'>OTHER CONVENIENCES</h1>
                    <div className='flex flex-col'>
                        <p className='font-thin text-sm'>24-hour in-room dining</p>
                        <p className='font-thin text-sm'>Internet - Free wifi in rooms</p>
                        <p className='font-thin text-sm'>Electronic safe in the room</p>
                        <p className='font-thin text-sm'>Iron and Ironing board in the room</p>
                        <p className='font-thin text-sm'>Daily housekeeping & turndown service</p>
                        <p className='font-thin text-sm'>Tea/ Coffee Maker</p>
                        <p className='font-thin text-sm'>Premium Wi-Fi at a nominal charge</p>
                        <p className='font-thin text-sm'>Living room with powder room, private terrace,</p>
                        <p className='font-thin text-sm'>bedroom & bathroom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails
