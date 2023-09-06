import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Room No..."
                    name="RoomNo"
                    value={editFormData.RoomNo}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Room Title..."
                    name="RoomTitle"
                    value={editFormData.RoomTitle}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter no. of Beds..."
                    name="Beds"
                    value={editFormData.Beds}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter a Room Area..."
                    name="RArea"
                    value={editFormData.RArea}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Room Description..."
                    name="Desc"
                    value={editFormData.Desc}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Room Features..."
                    name="Ft"
                    value={editFormData.Ft}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Room Price..."
                    name="Price"
                    value={editFormData.Price}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">
                    <SaveIcon />
                </button>
                <button type="button" onClick={handleCancelClick}>
                    <CancelIcon />
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;