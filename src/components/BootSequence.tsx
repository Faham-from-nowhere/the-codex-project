// src/components/BootSequence.tsx
'use client';

import { useGame, INITIAL_STORY } from '@/context/GameContext';
import React, { useEffect } from 'react';

export default function BootSequence() {
  const { displayStory } = useGame();

  useEffect(() => {
    const timer = setTimeout(() => {
      displayStory(INITIAL_STORY);
    }, 3500);

    return () => clearTimeout(timer);
  }, [displayStory]);

  return (
    // These classes create a full-screen black overlay and center the content
    <main className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black">
      <div className="flicker">
        <h1 className="text-4xl md:text-6xl font-bold disco-text">
          THE CODEX PROJECT
        </h1>
        <p className="text-xl md:text-2xl mt-2">
          <span className="text-danger">SYSTEM INITIALIZING</span>
          <span className="cursor"></span>
        </p>
      </div>
    </main>
  );
}