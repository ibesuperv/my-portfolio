import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import "./Note.css";

function Notes() {
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("Notes")) || [];
  });
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} deleteNote={deleteNote} />
      ))}
      <CreateNote textHandler={textHandler} saveHandler={saveHandler} inputText={inputText} />
    </div>
  );
}

export default Notes;
