import React from "react";
import { useState } from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
function Table() {
    let [Adultcount, setAdultcount] = useState(1);
    let [Childrencount, setChildrencount] = useState(0);
    let Adultincrement = () => {
        setAdultcount(Adultcount + 1);
    };
    let Adultdecrement = () => {
        if (Adultcount > 1) {
            setAdultcount(Adultcount - 1);
        } else {
            setAdultcount(1);
        }
    };
    let Childincrement = () => {
        setChildrencount(Childrencount + 1);
    };
    let Childdecrement = () => {
        if (Childrencount > 0) {
            setChildrencount(Childrencount - 1);
        } else {
            setChildrencount(0);
        }
    };
    return (
        <>
            <div className="flex flex-col align-middle justify-evenly h-auto">
                <div>
                    <div className="flex flex-wrap items-center justify-evenly">
                        <div className="space-x-3 flex">
                            <span className="font-medium p-2 bg-zinc-200">Adults </span>
                            <button onClick={Adultincrement}><AiFillPlusSquare className="text-3xl text-gray-800" /></button>
                            <p className="p-2 text-black">{Adultcount}</p>
                            <button onClick={Adultdecrement}><AiFillMinusSquare className="text-3xl text-gray-800" /></button>
                        </div>
                        <div className="space-x-3 flex">
                            <span className="font-medium p-2 bg-zinc-200">Children </span>
                            <button onClick={Childincrement}><AiFillPlusSquare className="text-3xl text-gray-800" /></button>
                            <p className="p-2 text-black">{Childrencount}</p>
                            <button onClick={Childdecrement}><AiFillMinusSquare className="text-3xl text-gray-800" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;