import { useState, useEffect } from "react";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import axios from "axios";
import EditModal from "../components/EditModal";

const API_URL = "https://note-nest-be.vercel.app/api/notes";

function App() {
  const [notes, setnotes] = useState([]);
  const [currentNote, setcurrentNote] = useState(null);
  const [isModalopen, setisModalopen] = useState(false);
  const fetchnotes = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setnotes(response.data);
      })
      .catch((error) => console.error("error fetching notes:", error));
  };

  const handleAddNote = (note) => {
    axios
      .post(`${API_URL}/add`, note)
      .then(() => {
        fetchnotes();
      })
      .catch((error) => console.error("error adding note:", error));
  };

  const handleDeleteNote = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        fetchnotes();
      })
      .catch((error) => console.error("error deleteing note: ", error));
  };

  useEffect(() => {
    fetchnotes();
  }, []);

  const handleUpdateNote = (updatedNote) => {
    axios
      .post(`${API_URL}/update/${updatedNote._id}`, updatedNote)
      .then(() => {
        fetchnotes();
        handleCloseModal();
      })
      .catch((error) => console.error("Error updated note:", error));
  };

  const handleOpenModal = (note) => {
    setcurrentNote(note);
    setisModalopen(true);
  };

  const handleCloseModal = () => {
    setcurrentNote(null);
    setisModalopen(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-400"> Note Nest</h1>
          <p className="text-purple-400 mt-2">Your Thoughts , Organized</p>
        </header>
        <main>
          <AddNote handleAddNote={handleAddNote} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <Note
                key={note._id}
                note={note}
                handleDelete={handleDeleteNote}
                handleEdit={handleOpenModal}
              />
            ))}
          </div>
        </main>
        {isModalopen && (
          <EditModal
            note={currentNote}
            onClose={handleCloseModal}
            onSave={handleUpdateNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;
