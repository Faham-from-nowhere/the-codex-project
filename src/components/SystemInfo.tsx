// src/components/SystemInfo.tsx
import React from 'react';

export default function SystemInfo() {
  // The dropped letters 'T', 'A', 'R' spell "TAR", a hint for file archives
  const hiddenMessage = (
    <span>
      The pa<span className="dropped-letter">T</span>terns bec
      <span className="dropped-letter">A</span>me clea
      <span className="dropped-letter">R</span>...
    </span>
  );

  const binaryCode = "01000110 01010010 01000001 01000111"; // Binary for "FRAG"

  return (
    <div className="glitch-frame">
      <p className="binary-flash">{binaryCode}</p>
      <p>{hiddenMessage}</p>
    </div>
  );
}