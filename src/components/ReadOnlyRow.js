import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { blue } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td className="p-2">{contact.RoomNo}</td>
            <td className="p-2">{contact.RoomTitle}</td>
            <td className="p-2">{contact.Beds}</td>
            <td className="p-2">{contact.RArea}</td>
            <td className="p-2">{contact.Desc}</td>
            <td className="p-2">{contact.Ft}</td>
            <td className="p-2">{contact.Price}</td>
            <td className="p-2">
                <EditIcon
                    className="cursor-pointer"
                    onClick={(event) => handleEditClick(event, contact)}
                    sx={{ color: blue[500] }}
                />
                <DeleteIcon
                    onClick={() => handleDeleteClick(contact.id)}
                    className="cursor-pointer"
                    sx={{ color: red[500] }}
                />
            </td>
        </tr>
    );
};

export default ReadOnlyRow;