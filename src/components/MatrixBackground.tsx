// src/components/MatrixBackground.tsx
'use client';

import React, { useState, useEffect } from 'react';

const CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';

// Array of our new color classes
const COLORS = ['matrix-gold', 'matrix-silver', 'matrix-charcoal'];

export default function MatrixBackground() {
  // We'll store both the text and the color for each column
  const [columns, setColumns] = useState<{ text: string; colorClass: string }[]>([]);

  useEffect(() => {
    const calculateColumns = () => {
      const columnCount = Math.floor(window.innerWidth / 20);
      const newColumns = Array.from({ length: columnCount }).map(() => ({
        text: Array.from({ length: Math.floor(window.innerHeight / 18) })
          .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
          .join(''),
        // Assign a random color class to each column
        colorClass: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      setColumns(newColumns);
    };

    calculateColumns();
    window.addEventListener('resize', calculateColumns);

    return () => window.removeEventListener('resize', calculateColumns);
  }, []);

  return (
    <div className="matrix-background">
      {columns.map((col, i) => (
        <p
          key={i}
          // Apply both the base class and the random color class
          className={`matrix-column ${col.colorClass}`}
          style={{
            left: `${i * 20}px`,
            animationDuration: `${Math.random() * 15 + 8}s`, // Slightly slower
            animationDelay: `${Math.random() * 8}s`,
          }}
        >
          {col.text}
        </p>
      ))}
    </div>
  );
}