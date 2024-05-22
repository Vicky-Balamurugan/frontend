import React from 'react';

const InputOutputPreview = ({ inputText, onInputChange, outputText }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Input & Output</h2>
      <textarea
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your prompt here..."
      />
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Output</h3>
        <p>{outputText}</p>
      </div>
    </div>
  );
};

export default InputOutputPreview;
