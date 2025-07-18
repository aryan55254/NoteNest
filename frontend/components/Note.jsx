function Note({ note, handleDelete, handleEdit }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-bold text-lg text-green-500">{note.title}</h3>
        <p className="text-green-500 mt-2"> {note.content} </p>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => handleEdit(note)}
          className="text-sm font-semibold text-green-400 hover:text-green-600"
        >
          {" "}
          Edit{" "}
        </button>
        <button
          onClick={() => handleDelete(note._id)}
          className="text-sm font-semibold text-green-400 hover:text-green-600"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
}

export default Note;
