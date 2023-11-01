import React from "react";
import data from "../mock-data.json";
import Table from "./Table";
import { useState } from "react";
function Details({ rooms, setRooms }) {
    const [Contacts, setContacts] = useState(data);
    const [addFormData, setaddFormData] = useState({
        Name: "",
        Email: "",
        Phone: "",
    });
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setaddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const NewContact = {
            Name: addFormData.Name,
            Email: addFormData.Email,
            Phone: addFormData.Phone,
        };
        const newContacts = [...Contacts, NewContact];
        setContacts(newContacts);
    };
    return (
        <>
            <div className="flex flex-col gap-[1px] w-auto mx-[12px] mt-[6px]">
                {/* <table className="border-collapse">
                    <thead>
                        <tr>
                            <th className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(239, 219, 138)]">Name</th>
                            <th className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(239, 219, 138)]">Email</th>
                            <th className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(239, 219, 138)]">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Contacts.map((contact) => (
                            <tr key={contact.email}>
                                <td className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(242, 244, 200)]">{contact.Name} </td>
                                <td className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(242, 244, 200)]">{contact.Email}</td>
                                <td className="border-[1px] border-gray-100 text-left p-[4px] font-[12px] mr-[4px] bg-[rgb(242, 244, 200)]">{contact.Phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <Table rooms={rooms} setRooms={setRooms} />
                {/* <h2 className="my-[4px]">Enter details</h2>
                <form className="flex flex-wrap items-center justify-center gap-[12px] w-fit" onSubmit={handleAddFormSubmit}>
                    <input
                        className="flex flex-wrap w-[12em] h-[2em] p-[2px] text-sm"
                        type="text"
                        name="Name"
                        required="required"
                        placeholder="Enter Name"
                        onChange={handleAddFormChange}
                    />
                    <input
                        className="flex flex-wrap w-[12em] h-[2em] p-[2px] text-sm"
                        type="email"
                        name="Email"
                        required="required"
                        placeholder="Enter Email"
                        onChange={handleAddFormChange}
                    />
                    <input
                        className="flex flex-wrap w-[12em] h-[2em] p-[2px] text-sm"
                        type="text"
                        name="Phone"
                        required="required"
                        placeholder="Enter Phone No."
                        onChange={handleAddFormChange}
                    />
                </form> */}
                <button className="flex items-center p-[4px] place-self-end mt-[12px] w-[12em] h-[3em] bg-[rgb(239, 219, 138)] rounded-md text-sm text-white bg-black justify-center hover:shadow-xl" type="submit">
                    Check Availability
                </button>
            </div>
        </>
    );
}

export default Details;