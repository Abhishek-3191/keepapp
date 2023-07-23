import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <DeleteIcon size={25}/>
        {/* <MdDelete size={25} /> */}
      </button>
    </div>
  );
}

export default Note;