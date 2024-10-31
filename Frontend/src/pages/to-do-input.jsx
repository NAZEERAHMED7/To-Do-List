import React from "react";

const Task = () => {
  return (
    <div className="bg-primary-100 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col bg-white w-full max-w-lg md:max-w-2xl lg:max-w-3xl items-start mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl px-3 py-4 mb-5 text-black">
          NB-YT To Do List
        </h1>
        <div className="flex w-full">
          <input
            className="flex-1 px-3 py-4 text-lg md:text-xl lg:text-2xl border rounded-tl-xl rounded-bl-xl focus:outline-none focus:ring-1 focus:ring-primary-100 text-black"
            type="text"
            placeholder="Enter Your Task"
          />
          <button
            className="px-4 md:px-6 lg:px-8 bg-gray-600 hover:bg-gray-800 border rounded-tr-xl rounded-br-xl text-lg md:text-xl lg:text-2xl text-white"
            type="button"
          >
            Add Task
          </button>
        </div>
        <p className="font-semibold px-3 py-4 text-primary-100 text-sm md:text-base lg:text-lg">
          Fill Task Details
        </p>
      </div>
    </div>
  );
};

export default Task;
