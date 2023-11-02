import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link, useNavigate } from "react-router-dom";
import Details from "./Details";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Autocomplete, TextField } from "@mui/material";
import hotelsdata from "../hotels.json";

const hotels = hotelsdata.map((hotel) => {
    return {
        label: hotel.title + ", " + hotel.place,
        slug: hotel.slug,
    }
})

function PopupMenu({ onClose }) {
    const [rooms, setRooms] = useState([{
        adults: 1,
        children: 0,
    }])
    const [value, setValue] = useState();
    const [slug, setSlug] = useState("the-royal-serenity-in-mumbai");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        if (!!value)
            setSlug(hotels.filter((hotel) => hotel.label == value)[0].slug);
    }, [value])

    const handleClick = () => {
        navigate(`/hotel/${slug}`);
        onClose();
    }

    return (
        <>
            <div className="flex flex-col justify-between items-center flex-wrap ">
                <div className="flex w-full align-middle flex-1 mx-3 my-2 ">
                    <Autocomplete
                        disablePortal
                        id="search-box"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        options={hotels.map((option) => option.label)}
                        freeSolo
                        className="rounded !border-none flex-1 text-xs"
                        renderInput={(params) => <TextField {...params} label="Search for Hotels" fullWidth />}
                    />
                    <div className=" cursor-pointer p-2 mt-1">
                        <button onClick={handleClick}>
                            <SearchIcon />
                        </button>
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
            <Details rooms={rooms} setRooms={setRooms} onClose={onClose} startDate={startDate} endDate={endDate} hotelSlug={slug} />
        </>
    );
}

export default PopupMenu;