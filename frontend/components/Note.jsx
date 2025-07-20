function Note({ note, handleDelete, handleEdit }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-bold text-lg text-blue-400">{note.title}</h3>
        <p className="text-gray-300 mt-2 whitespace-pre-wrap">{note.content}</p>
      </div>
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={() => handleEdit(note)}
          className="text-sm font-semibold text-purple-400 cursor-pointer hover:text-purple-300 transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(note._id)}
          className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors duration-200 cursor-pointer "
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
