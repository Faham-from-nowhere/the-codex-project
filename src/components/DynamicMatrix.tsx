// src/components/DynamicMatrix.tsx
'use client';

import dynamic from 'next/dynamic';
import { useGame } from '@/context/GameContext'; // Import the useGame hook

// Perform the dynamic import with ssr: false inside a Client Component
const MatrixBackground = dynamic(() => import('@/components/MatrixBackground'), {
  ssr: false,
});

export default function DynamicMatrix() {
  const { view } = useGame(); // Get the current view from our global state

  // If the view is 'boot', render nothing. Otherwise, render the matrix.
  if (view === 'boot') {
    return null;
  }

  return <MatrixBackground />;
}