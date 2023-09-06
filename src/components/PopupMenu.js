import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { amber } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Table1 from "./Table1";
function PopupMenu() {
    return (
        <>
            <div className="flex justify-between flex-wrap ">
                <div className=" flex align-middle w-96 h-10 border border-black mx-3 my-2 ">
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
                <div className="bg-white h-10 w-36 flex justify-between align-middle p-2 text-xs m-2">
                    From
                    <div className="text-amber-500 text-sm cursor-pointer">8/9/2023</div>
                    <CalendarMonthIcon
                        className="cursor-pointer"
                        sx={{ color: amber[500] }}
                    />
                </div>
                <div className="bg-white h-10 w-36 mr-3 flex justify-between p-2 text-xs m-2">
                    To
                    <div className="text-amber-500 text-sm cursor-pointer">8/10/2023</div>
                    <CalendarMonthIcon
                        className="cursor-pointer"
                        sx={{ color: amber[500] }}
                    />
                </div>
            </div>
            <Table1 />
        </>
    );
}

export default PopupMenu;