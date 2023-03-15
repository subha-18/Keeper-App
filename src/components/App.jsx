import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function addNote(note) {
    setNotes((prevItems) => [...prevItems, note]);
  }

  function deleteNote(noteID) {
    setNotes((prevItems) =>
      prevItems.filter((prevNotes, index) => index !== noteID)
    );
  }
  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <CreateArea onAdd={addNote} />
      {filteredNotes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
