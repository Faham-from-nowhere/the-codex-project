// src/components/KeyValidator.tsx
'use client';

import { useGame } from '@/context/GameContext';
import React, { useState } from 'react';

type KeyValidatorProps = {
  onClose: () => void;
};

export default function KeyValidator({ onClose }: KeyValidatorProps) {
  const { submitKey } = useGame();
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = submitKey(inputValue);
    setFeedback(result.message);
    if (result.correct) {
      // If correct, the GameContext will trigger the story view.
      // We can close this modal after a short delay.
      setTimeout(() => {
        onClose();
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="art-deco-frame p-8 text-center w-full max-w-md">
        <h2 className="text-2xl text-gold mb-4">SUBMIT FRAGMENT</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full bg-dark-metal text-gold p-2 border border-gold focus:outline-none focus:shadow-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
          <div className="mt-6 space-x-4">
            {/* Apply the new button classes here */}
            <button type="submit" className="btn btn-gold">Validate</button>
            <button type="button" onClick={onClose} className="btn btn-gold">Close</button>
          </div>
        </form>
        {feedback && <p className={`mt-4 ${feedback.includes('Denied') || feedback.includes('Duplicate') ? 'text-danger' : 'text-glow'}`}>{feedback}</p>}
      </div>
    </div>
  );
}