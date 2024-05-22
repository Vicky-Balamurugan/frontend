import React, { useState } from 'react';

const Translate = ({ onTranslate }) => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    const translation = await onTranslate(sourceText);
    setTranslatedText(translation);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-semibold mb-4">Language Translation</h2>
      <textarea
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter text to translate..."
      />
      <button
        onClick={handleTranslate}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Translate
      </button>
      {translatedText && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Translated Text</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translate;
