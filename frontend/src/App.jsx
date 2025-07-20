import { useState, useEffect } from "react";
import Note from "../components/Note";
import AddNote from "../components/AddNote";
import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

function App() {
  const [notes, setnotes] = useState([]);
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
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
