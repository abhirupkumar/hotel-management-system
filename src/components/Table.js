import { Add, Close } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
function Table({ rooms, setRooms }) {

    const [value, setValue] = useState(0);

    const handleAddRoom = () => {
        setRooms([...rooms, {
            adults: 1,
            children: 0,
        }])
        setValue(rooms.length);
    }

    const handleDeleteRoom = (index) => {
        setValue(index - 1);
        const newRooms = [...rooms];
        newRooms.splice(index, 1);
        setRooms(newRooms);
    }

    const handleData = (index, type, value) => {
        const newRooms = [...rooms];
        if (type == "adults" && value < 1) return;
        if (type == "children" && value < 0) return;
        newRooms[index][type] = value;
        setRooms(newRooms);
    }

    return (
        <>
            <div className="flex flex-col align-middle justify-evenly h-auto mt-4">
                <div className="p-4 bg-white">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", flexDiredtion: "row" }}>
                            <TabList value={value} onChange={(e, newValue) => setValue(newValue)} aria-label="Room Tabs">
                                {rooms.map((room, index) => index != 0 ? <Tab key={index}
                                    sx={{
                                        flexDirection: "row-reverse",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} label={`Room ${index + 1}`} value={index}
                                    icon={
                                        <Close className="!text-sm mt-1" onClick={() => handleDeleteRoom(index)} />
                                    } />
                                    :
                                    <Tab key={index} sx={{
                                        flexDirection: "row-reverse",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }} label={`Room ${index + 1}`} value={index} />)}
                            </TabList>
                            <Button
                                variant="outlined"
                                sx={{ marginLeft: "auto" }}
                                onClick={handleAddRoom}
                            >
                                <Add />
                            </Button>
                        </Box>
                        {rooms.map((room, index) => {
                            return <TabPanel key={index} value={index}>
                                <div className="flex flex-wrap items-center justify-evenly">
                                    <div className="space-x-3 flex">
                                        <span className="font-medium p-2 bg-zinc-200">Adults </span>
                                        <button><AiFillPlusSquare onClick={() => handleData(index, "adults", room.adults + 1)} className="text-3xl text-gray-800" /></button>
                                        <p className="p-2 text-black">{room.adults}</p>
                                        <button><AiFillMinusSquare onClick={() => handleData(index, "adults", room.adults - 1)} className="text-3xl text-gray-800" /></button>
                                    </div>
                                    <div className="space-x-3 flex">
                                        <span className="font-medium p-2 bg-zinc-200">Children </span>
                                        <button><AiFillPlusSquare onClick={() => handleData(index, "children", room.children + 1)} className="text-3xl text-gray-800" /></button>
                                        <p className="p-2 text-black">{room.children}</p>
                                        <button><AiFillMinusSquare onClick={() => handleData(index, "children", room.children - 1)} className="text-3xl text-gray-800" /></button>
                                    </div>
                                </div>
                            </TabPanel>
                        })}
                    </TabContext>
                </div>
            </div>
        </>
    );
}

export default Table;