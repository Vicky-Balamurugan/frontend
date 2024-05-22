import React, { useState } from 'react';

const Miscellaneous = ({ onGrammarCheck, onCreativeWriting, onQuestionAnswering }) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleGrammarCheck = async () => {
    const correctedText = await onGrammarCheck(text);
    setResult(correctedText);
  };

  const handleCreativeWriting = async () => {
    const creativeText = await onCreativeWriting(text);
    setResult(creativeText);
  };

  const handleQuestionAnswering = async () => {
    const answer = await onQuestionAnswering(text);
    setResult(answer);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Miscellaneous Features</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter text here..."
      />
      <div className="flex space-x-2 mb-4">
        <button
          onClick={handleGrammarCheck}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Grammar Check
        </button>
        <button
          onClick={handleCreativeWriting}
          className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Creative Writing
        </button>
        <button
          onClick={handleQuestionAnswering}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Q&A
        </button>
      </div>
      {result && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Result</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Miscellaneous;
