// src/app/page.tsx
'use client';

import React, { useEffect } from 'react'; // Add useEffect
import Terminal from '@/components/Terminal';
import BootSequence from '@/components/BootSequence';
import StoryViewer from '@/components/StoryViewer';
import GameCompleteScreen from '@/components/GameCompleteScreen';
import { useGame } from '@/context/GameContext';

export default function HomePage() {
  // Get unlockedFragments and setView from the context
  const { view} = useGame();

  



  // The rest of the component remains the same
  if (view === 'complete') {
    return <GameCompleteScreen />;
  }
  if (view === 'story') {
    return <StoryViewer />;
  }
  if (view === 'boot') {
    return <BootSequence />;
  }
  return <Terminal />;
}
