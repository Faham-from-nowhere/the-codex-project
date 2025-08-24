// src/components/QRCodePuzzle.tsx


'use client';

import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodePuzzle() {
  const realFragment = 'FRAG_4: LzYxLjU4Tg=='; // Base64 for "/61.58N"
  const decoyMessage = 'ACCESS DENIED: Further attempts will be logged.';

  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          {/* Decoy QR Code */}
          <QRCodeCanvas
            value={decoyMessage}
            size={256}
            bgColor="#0d0208"
            fgColor="#ff003c"
            level="H"
          />
        </div>
        <div className="back">
          {/* Real QR Code */}
          <QRCodeCanvas
            value={realFragment}
            size={256}
            bgColor="#0d0208"
            fgColor="#00ff41"
            level="H"
          />
        </div>
      </div>
    </div>
  );
}
