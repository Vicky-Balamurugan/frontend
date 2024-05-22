import React, { useState } from 'react';

const SentimentAnalysis = ({ onAnalyzeSentiment }) => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleAnalyze = async () => {
    const sentiment = await onAnalyzeSentiment(text);
    setResult(sentiment);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Sentiment Analysis</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter text for sentiment analysis..."
      />
      <button
        onClick={handleAnalyze}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Analyze Sentiment
      </button>
      {result && (
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h3 className="text-lg font-semibold mb-2">Analysis Result</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
