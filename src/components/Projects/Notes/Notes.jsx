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

const [editToggle, setEditToggle] = useState(null)

    const editHandler = (id,text) => {
        setEditToggle(id)
        setInputText(text)
    }
  
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
        if(editToggle) {
            setNotes(notes.map((note) => (
                note.id === editToggle ?
                {...note, text: inputText}
                : note
            )))
        } else {
            setNotes((prevNotes) => [
                ...prevNotes, {
                    id: uuid(),
                    text: inputText
                }
            ])
        }
        
        setInputText("")
        setEditToggle(null)
    }

  

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
      {
            notes.map((note) => (
                editToggle === note.id ?
                <CreateNote 
                        inputText={inputText}
                        setInputText = {setInputText} 
                        saveHandler = {saveHandler}
                        />
                :
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    editHandler = {editHandler}
                    deleteHandler= {deleteHandler}
                >
                </Note>
            ))
        }
        {
            editToggle === null ? 
            <CreateNote 
            inputText={inputText}
            setInputText = {setInputText} 
            saveHandler = {saveHandler}
        /> : <></>
        }
    </div>
  );
}

export default Notes;
