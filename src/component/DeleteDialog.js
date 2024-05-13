import React from "react";
const DeleteDialog = ({ onCancel, onDelete }) => {
  return (
    <div className="delete-dialog bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <p className="mb-4">Are you sure you want to delete this user?</p>
      <div className="delete-dialog-buttons flex justify-between">
        <button
          onClick={onDelete}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteDialog;

