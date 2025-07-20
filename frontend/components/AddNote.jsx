import { useState } from "react";

function AddNote({ handleAddNote }) {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill in both the title and content.");
      return;
    }
    handleAddNote({ title, content });
    setcontent("");
    settitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-gray-800 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-700 rounded text-gray-200 placeholder-gray-400"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-700 rounded text-gray-200 placeholder-gray-400"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-200"
      >
        Add Note
      </button>
    </form>
  );
}
export default AddNote;
