'use client';

import { useState } from 'react';
import ModelSelection from '../components/ModelSelection';
import ParameterTuning from '../components/ParameterTuning';
import InputOutputPreview from '../components/InputOutputPreview';
import ChatAndConversation from '../components/ChatAndConversation';
import CodeGeneration from '../components/CodeGeneration';
import CustomInstructions from '../components/CustomInstructions';
import SentimentAnalysis from '../components/SentimentAnalysis';
import TextGeneration from '../components/TextGeneration';
import Translation from '../components/Translation';
import Miscellaneous from '../components/Miscellaneous';
import styles from './styles/Home.module.css';

export default function Home() {
  const [selectedModel, setSelectedModel] = useState('text-davinci-003');
  const [parameters, setParameters] = useState({
    temperature: 0.7,
    maxTokens: 100,
    topP: 0.9,
    frequencyPenalty: 0,
    presencePenalty: 0,
  });
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [currentFeature, setCurrentFeature] = useState('text-generation');

  const handleModelSelect = (model) => {
    setSelectedModel(model);
  };

  const handleParameterChange = (param, value) => {
    setParameters({ ...parameters, [param]: value });
  };

  const handleInputTextChange = (text) => {
    setInputText(text);
  };

  const handleGenerateResponse = async () => {
    const response = await fetch('/api/generate-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: selectedModel,
        parameters,
        inputText,
      }),
    });
    const data = await response.json();
    setOutputText(data.outputText);
  };

  const renderFeatureComponent = () => {
    switch (currentFeature) {
      case 'text-generation':
        return <TextGeneration inputText={inputText} onChange={handleInputTextChange} onGenerate={handleGenerateResponse} outputText={outputText} />;
      case 'code-generation':
        return <CodeGeneration />;
      case 'chat-and-conversation':
        return <ChatAndConversation />;
      case 'translation':
        return <Translation />;
      case 'custom-instructions':
        return <CustomInstructions />;
      case 'sentiment-analysis':
        return <SentimentAnalysis />;
      case 'miscellaneous':
        return <Miscellaneous />;
      default:
        return null;
    }
  };

  return (
    <div  className={styles.container}>
      <ModelSelection onSelect={handleModelSelect} />
      <ParameterTuning parameters={parameters} onChange={handleParameterChange} />
      <nav>
        <button className='btn btn-primary' onClick={() => setCurrentFeature('text-generation')}>Text Generation</button>
        <button className='btn btn-secondary' onClick={() => setCurrentFeature('code-generation')}>Code Generation</button>
        <button className='btn btn-primary w-32 bg-yellow-400 ' onClick={() => setCurrentFeature('chat-and-conversation')}>Chat & Conversation</button>
        <button className='btn btn-circle btn-primary w-32'onClick={() => setCurrentFeature('translation')}>Translation</button>
        <button className='btn btn-accent ' onClick={() => setCurrentFeature('custom-instructions')}>Custom Instructions</button>
        <button className='btn btn-outline bg-green-400 active:bg-red-500 hover:bg-blue-300'onClick={() => setCurrentFeature('sentiment-analysis')}>Sentiment Analysis</button>
        <button className='btn bg-red-600 border rounded-xl'onClick={() => setCurrentFeature('miscellaneous')}>Miscellaneous</button>
      </nav>
      {renderFeatureComponent()}
    </div>
  );
}
