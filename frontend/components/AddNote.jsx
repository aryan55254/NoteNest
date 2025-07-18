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
    <form onSubmit={handleSubmit} className="mb-8 bg-gray-900 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 rounded text-green-500"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-800 rounded text-green-500"
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-800 text-black font-bold py-2 px-4 rounded cursor-pointer"
      >
        Add Note
      </button>
    </form>
  );
}
export default AddNote;
