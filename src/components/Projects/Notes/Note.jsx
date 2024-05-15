import React from "react";
import  { MdDeleteForever , MdEditNote } from "react-icons/md";

function Note({ id, text, deleteNote, editHandler }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <MdDeleteForever
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        />
        <MdEditNote
          className="note__delete"
          onClick={() => editHandler(id, text) }
          aria-hidden="true"
          />

        
      </div>
    </div>
  );
}

export default Note;
