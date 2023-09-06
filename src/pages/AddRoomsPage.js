import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddIcon from "@mui/icons-material/Add";
import data from "../mock-data1.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
const AddRoomsPage = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        RoomNo: "",
        RoomTitle: "",
        Beds: "",
        RArea: "",
        Desc: "",
        Ft: "",
        Price: "",
    });

    const [editFormData, setEditFormData] = useState({
        RoomNo: "",
        RoomTitle: "",
        Beds: "",
        RArea: "",
        Desc: "",
        Ft: "",
        Price: "",
    });

    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            RoomNo: addFormData.RoomNo,
            RoomTitle: addFormData.RoomTitle,
            Beds: addFormData.Beds,
            RArea: addFormData.RArea,
            Desc: addFormData.Desc,
            Ft: addFormData.Ft,
            Price: addFormData.Price,
        };

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,

            RoomNo: editFormData.RoomNo,
            RoomTitle: editFormData.RoomTitle,
            Beds: editFormData.Beds,
            RArea: editFormData.RArea,
            Desc: editFormData.Desc,
            Ft: editFormData.Ft,
            Price: editFormData.Price,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            RoomNo: contact.RoomNo,
            RoomTitle: contact.RoomTitle,
            Beds: contact.Beds,
            RArea: contact.RArea,
            Desc: contact.Desc,
            Ft: contact.Ft,
            Price: contact.Price,
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className="m-4 p-4 space-y-2 min-h-screen">
            <h2 className="font-medium">Add New Data</h2>
            <form className="flex flex-wrap" onSubmit={handleAddFormSubmit}>
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="RoomNo"
                    required="required"
                    placeholder="Enter The Room No..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="RoomTitle"
                    required="required"
                    placeholder="Enter The Room Title..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="Beds"
                    required="required"
                    placeholder="Enter no of Beds ..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="RArea"
                    required="required"
                    placeholder="Enter Room Area..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="Desc"
                    required="required"
                    placeholder="Enter Room Description..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="Ft"
                    required="required"
                    placeholder="Enter Room Features..."
                    onChange={handleAddFormChange}
                />
                <input
                    className="p-2 m-2 border-2 border-gray-600 rounded-md"
                    type="text"
                    name="Price"
                    required="required"
                    placeholder="Enter Room Price..."
                    onChange={handleAddFormChange}
                />
                <button className="bg-blue-700 hover:bg-blue-600 text-white p-1 m-2 pr-2 rounded-md" type="submit">
                    <AddIcon />
                    Add Data
                </button>
            </form>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th className=" p-2">Room Number</th>
                            <th className=" p-2">Room Title</th>
                            <th className=" p-2">Beds</th>
                            <th className=" p-2">Room Area</th>
                            <th className=" p-2">Room Description</th>
                            <th className=" p-2">Room Features</th>
                            <th className=" p-2">Price (Per Night) in ₹ </th>
                            <th className=" p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="p-2">
                        {contacts.map((contact) => (
                            <React.Fragment key={contact.id}>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default AddRoomsPage;