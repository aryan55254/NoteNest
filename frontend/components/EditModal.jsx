import React, { useEffect, useState } from "react";

function EditModal({ note, onClose, onSave }) {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, seteditedContent] = useState(note.content);
  useEffect(() => {
    setEditedTitle(note.title);
    seteditedContent(note.content);
  }, [note]);
  const handlesave = () => {
    onSave({ ...note, title: editedTitle, content: editedContent });
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 p-6 rounded-lg w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-blue-300"> "Edit Note" </h2>
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 rounded text-white"
        />
        <textarea
          value={editedContent}
          onChange={(e) => seteditedContent(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 rounded text-white"
          rows="6"
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md font-semibold cursor-pointer "
          >
            Cancel
          </button>
          <button
            onClick={handlesave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold cursor-pointer "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
