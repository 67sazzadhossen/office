"use client";
import React from "react";

const UpdateButton = ({ buttonName }) => {
  return (
    <div>
      <button className="bg-gray-800 text-white bg-opacity-80 backdrop-blur-2xl rounded-full px-6 py-1">
        {buttonName}
      </button>
    </div>
  );
};

export default UpdateButton;
