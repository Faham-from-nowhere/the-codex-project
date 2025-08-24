// src/components/StoryViewer.tsx
'use client';

import { useGame } from '@/context/GameContext';
import React, { useEffect } from 'react';

export default function StoryViewer() {
  // We now get unlockedFragments here to check the game's progress
  const { storyToDisplay, displayStory, setView, unlockedFragments } = useGame();

  useEffect(() => {
    const timer = setTimeout(() => {
      // After the story has been on screen for 12 seconds...
      
      // Check if all 7 fragments have been unlocked
      if (unlockedFragments.length === 7) {
        // If the game is won, go to the 'complete' screen
        setView('complete');
      } else {
        // Otherwise, just go back to the terminal as usual
        displayStory(null);
        setView('terminal');
      }
    }, 12000); // The story is on screen for 12 seconds

    return () => clearTimeout(timer);
  }, [displayStory, setView, unlockedFragments]);

  return (
    <div className="flex items-center justify-center min-h-screen story-flicker">
      <div className="art-deco-frame w-[95vw] h-[90vh] flex items-center justify-center p-8">
        <p className="text-2xl text-gold whitespace-pre-wrap text-center">
          {storyToDisplay}
        </p>
      </div>
    </div>
  );
}