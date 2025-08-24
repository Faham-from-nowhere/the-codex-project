// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import DynamicMatrix from "@/components/DynamicMatrix"; // Import the new loader component
import { GameProvider } from '@/context/GameContext'; 

export const metadata: Metadata = {
  title: "The Codex Project",
  description: "A Retro-Cyber Intelligent System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GameProvider> {/* Wrap everything */}
          <DynamicMatrix />
          {children}
        </GameProvider>
      </body>
    </html>
  );
}