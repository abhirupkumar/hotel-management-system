import React from "react";
import ReactDom from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import PopupMenu from "./PopupMenu";
function Popup({ isVisible, onClose }) {
    if (!isVisible) return null;
    return ReactDom.createPortal(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-25 z-50 backdrop-blur-sm flex justify-center items-center">
                <div className="w-1/2">
                    <div className="bg-zinc-200 p-8 rounded h-fit w-auto flex flex-col">
                        <button className="place-self-end" onClick={() => onClose()}>
                            <IoCloseSharp className="h-6 w-6" />
                        </button>
                        <PopupMenu onClose={onClose} />
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Popup;