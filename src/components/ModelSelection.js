import React from 'react';

const ModelSelection = ({ onSelect }) => {
  const models = ['text-davinci-003', 'code-davinci-002', 'text-curie-001'];

  return (
    <div className="w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Select a Model</h2>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      >
        {models.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelSelection;
