import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import Table1 from "./Table1";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function PopupMenu() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="flex justify-between items-center flex-wrap ">
                <div className="flex align-middle flex-1 h-10 border border-black mx-3 my-2 ">
                    <input
                        className=" bg-white border-none flex-1 px-2 text-xs"
                        placeholder="Search for Hotels..."
                    ></input>
                    <div className=" cursor-pointer p-2">
                        <Link to={`/rooms`}>
                            <SearchIcon />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap space-x-4 mx-4">
                    <div className="flex flex-col items-start">
                        <div className="text-xs bg-zinc-200 z-[10] ml-2">From</div>
                        <DatePicker className="-mt-2" calendarIcon={<CalendarMonthIcon
                            className="cursor-pointer h-10"
                            sx={{ color: "blue" }}
                        />} calendarAriaLabel="From" value={startDate} onChange={(newValue) => setStartDate(newValue)} />
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="text-xs bg-zinc-200 z-[10] ml-2">To</div>
                        <DatePicker className="-mt-2" calendarIcon={<CalendarMonthIcon
                            className="cursor-pointer h-10"
                            sx={{ color: "blue" }}
                        />} calendarAriaLabel="To" value={endDate} onChange={(newValue) => setEndDate(newValue)} />
                    </div>
                </div>
            </div>
            <Table1 />
        </>
    );
}

export default PopupMenu;