import React, { useState } from 'react';

const CustomInstructions = ({ onSendInstruction }) => {
  const [instruction, setInstruction] = useState('');

  const handleSend = () => {
    onSendInstruction(instruction);
    setInstruction('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Custom Instructions</h2>
      <textarea
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter custom instructions here..."
      />
      <button
        onClick={handleSend}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Send Instruction
      </button>
    </div>
  );
};

export default CustomInstructions;
