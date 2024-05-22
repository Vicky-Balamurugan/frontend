import React from 'react';

const TextGeneration = ({ inputText, onChange, onGenerate, outputText }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Text Generation</h2>
      <textarea
        value={inputText}
        onChange={(e) => onChange(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter your prompt here..."
      />
      <button
        onClick={onGenerate}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Generate Text
      </button>
      {outputText && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Generated Text</h3>
          <p>{outputText}</p>
        </div>
      )}
    </div>
  );
};

export default TextGeneration;
