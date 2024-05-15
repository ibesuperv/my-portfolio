import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import "./Note.css";

function Notes () {
    const [inputText, setInputText] = useState("")
    const [notes, setNotes] = useState([])
    const [editToggle, setEditToggle] = useState(null)

    const editHandler = (id,text) => {
        setEditToggle(id)
        setInputText(text)
    }
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

    const deleteHandler = (id) => {
        const newNotes = notes.filter(n => n.id !== id)
        setNotes(newNotes)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
          setNotes(data);
        }
      }, []);

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {
            notes.map((note) => (
                editToggle === note.id ?
                <CreateNote 
                        textHandler={textHandler}
                    saveHandler={saveHandler}
            inputText={inputText}
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
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}
        /> : <></>
        }
    </div>
  );
}

export default Notes;
