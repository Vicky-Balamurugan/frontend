import React, { useState } from 'react';

const CodeGeneration = ({ onGenerateCode }) => {
  const [codeSnippet, setCodeSnippet] = useState('');

  const handleGenerate = () => {
    onGenerateCode(codeSnippet);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Code Generation</h2>
      <textarea
        value={codeSnippet}
        onChange={(e) => setCodeSnippet(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter code snippet here..."
      />
      <button
        onClick={handleGenerate}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Generate Code
      </button>
    </div>
  );
};

export default CodeGeneration;
