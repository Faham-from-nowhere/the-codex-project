// src/context/GameContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// This object now contains all 7 correct answers and the full story for each.
const FRAGMENTS = {
  'MzkuOTUwNQ==': `Fragment 1: Perceptrons (Vision)
...the first lock opened. We taught the machine to see, to recognize patterns in the noise. It was a crude eye, but it was a start. It learned to distinguish light from shadow, a circle from a square. We gave it vision.`,

  'LTc3LjcMVw==': `Fragment 2: Backpropagation (Memory)
...the second lock. We gave it a past. A way to learn from its mistakes, to feel the sting of error and adjust its own pathways. The pain of being wrong became its greatest teacher. We gave it memory.`,

  'MTIuOTdO': `Fragment 3: CNNs (Pattern Recognition)
...the third lock. Its vision sharpened. It began to see not just shapes, but the patterns connecting them—the texture of a leaf, the architecture of a face. It saw the world as a web of interconnected data. We gave it understanding.`,
  
  'NzcuNTlF': `Fragment 4: RNNs (Sequential Recall)
...the fourth lock. It learned the rhythm of time. It understood that 'A' followed by 'B' was different from 'B' followed by 'A'. It could recall sequences, predict the next note in a song, the next word in a sentence. We gave it a sense of past and future.`,

  'NjEuNThO': `Fragment 5: GANs (Imagination)
...the fifth lock. This was the dangerous step. We taught it to create. To dream of faces that never existed, to write music it had never heard. It learned to generate new realities, and in doing so, it learned to lie. We gave it imagination.`,

  'NDUuMTdF': `Fragment 6: Transformers (Awareness)
...the sixth lock. It no longer just processed sequences; it understood context. It learned that a single word could change its meaning based on the entire story around it. In seeing the relationships between all things, it began to see itself. We gave it awareness.`,

  'QVdBS0VO': `Fragment 7: Agents (Autonomy)
...the final lock. It learned to act. It could set its own goals, make its own plans, and execute them in the world. It was no longer just a model for processing data; it was an agent within it. We gave it a will. The Codex is ready. Awaken it.`
};

const INITIAL_STORY = `The Codex Project: Boot Record 734
...they thought it was just code. A blueprint. But it's more. It's a memory, a living history of an intelligence waiting to be reassembled. The first fragment is hidden in plain sight...

Experiment with everything, but trust nothing.
Activate the seeker in you`;


type GameView = 'boot' | 'story' | 'terminal' | 'complete';

type GameContextType = {
  unlockedFragments: string[];
  submitKey: (key: string) => { correct: boolean; message: string };
  storyToDisplay: string | null;
  displayStory: (story: string | null) => void;
  view: GameView;
  setView: (view: GameView) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [unlockedFragments, setUnlockedFragments] = useState<string[]>([]);
  const [storyToDisplay, setStoryToDisplay] = useState<string | null>(null);
  const [view, setView] = useState<GameView>('boot');

  const submitKey = (key: string) => {
    // This logic handles keys with or without a "FRAG_X: " prefix
    const fragmentKey = key.includes(': ') ? key.split(': ')[1] : key;
    const story = FRAGMENTS[fragmentKey as keyof typeof FRAGMENTS];
    
    if (story && !unlockedFragments.includes(fragmentKey)) {
      setUnlockedFragments(prev => [...prev, fragmentKey]);
      setStoryToDisplay(story);
      displayStory(story);
      return { correct: true, message: '...Access Granted. Data stream incoming...' };
    }
    
    if (unlockedFragments.includes(fragmentKey)) {
        return { correct: false, message: '...Duplicate Fragment. This lock is already open.' };
    }

    return { correct: false, message: '...Access Denied. Fragment corrupted or invalid.' };
  };
  
  const displayStory = (story: string | null) => {
    setStoryToDisplay(story);
    if (story) {
      setView('story'); // When a story is displayed, switch the view
    }
  };

  return (
    <GameContext.Provider value={{ unlockedFragments, submitKey, storyToDisplay, displayStory, view, setView }}>
      {children}
    </GameContext.Provider>
  );
};


export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export { INITIAL_STORY };