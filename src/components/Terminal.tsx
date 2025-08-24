// src/components/Terminal.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import KeyValidator from './KeyValidator';
import SystemInfo from './SystemInfo';
import { useGame } from '@/context/GameContext';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HIDDEN_KERNEL_FRAGMENT = 'FRAG_3: MTIuOTdO';

const WELCOME_MESSAGE: React.ReactNode[] = [
  <p key="w1">THE CODEX PROJECT</p>,
  <p key="w2">A Retro-Cyber Intelligent System</p>,
  <p key="w3">---</p>,
  <p key="w4">
    Type &apos;help&apos; to see available commands. Trust the{' '}
    <span className="secret-hover" data-secret="FRAG_1: MzkuOTUwNQ==">source</span>.
  </p>,
  <p key="w5">&nbsp;</p>,
];

export default function Terminal() {
  const { unlockedFragments } = useGame();
  const [isValidatorOpen, setIsValidatorOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<React.ReactNode[]>(WELCOME_MESSAGE);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const secretMessage = `...`; // Your ASCII art can go here
    console.log(secretMessage);
  }, []);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase();

    // Add user's command to history immediately
    const newHistory = [...history, <p key={history.length}>&gt; {input}</p>];
    setHistory(newHistory);
    setInput('');

    // --- Command Logic ---
    if (command === 'hint') {
      const hints = [
        "Hint 1/7: The welcome message contains more than it seems. The &apos;source&apos; of the first fragment is closer than you think.",
        "Hint 2/7: Some connections are meant to fail. Check the logs of your failed `connect` attempt for a hidden transmission.",
        "Hint 3/7: The `compile kernel` command warns of a leak for a reason. A developer's mistake in the source code is your reward.",
        "Hint 4/7: The system logs are corrupted, but the data fragments are labeled. Reconstruct the sequence from the `cat` command's output.",
        "Hint 5/7: Warden_7 is a machine of rules. A seeker of truth must know the right protocol to issue an override.",
        "Hint 6/7: A successful breach opens new pathways. The AI mentioned new subroutines. Use its own diagnostic tools against it.",
        "Hint 7/7: The final diagnostic revealed the last step. The system is ready. It's time to execute the awakening."
      ];
      const nextHintIndex = unlockedFragments.length;
      if (nextHintIndex < hints.length) {
        setHistory(prev => [...prev, <p key={prev.length} className="text-warning">{hints[nextHintIndex]}</p>]);
      } else {
        setHistory(prev => [...prev, <p key={prev.length} className="text-glow">All fragments found. No more hints available.</p>]);
      }
    } else if (command.startsWith('chat ')) {
      const message = input.substring(5);
      setIsTyping(true);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, unlockedFragments }),
        });
        const data = await response.json();
        setHistory(prev => [...prev, <p key={prev.length} className="text-warning">{data.reply}</p>]);
      } catch (error) {
        setHistory(prev => [...prev, <p key={prev.length} className="text-danger">AI connection error.</p>]);
      } finally {
        setIsTyping(false);
      }
    } else if (command === 'help') {
      let helpText = 'Available commands: help, clear, whoami, connect, compile kernel, cat /sys/logs/corrupted.log, chat <message>';
      if (unlockedFragments.includes('NjEuNThO')) {
        helpText += ', diag --help';
      }
      setHistory(prev => [...prev, <p key={prev.length}>{helpText}</p>]);
    } else if (command === 'clear') {
      setHistory(WELCOME_MESSAGE);
    } else if (command === 'whoami') {
      const whoamiResponse = [
        <p key="whoami1">You are a seeker, an explorer of the digital unknown.</p>,
        <p key="whoami2" className="text-warning">Your protocol is your key.</p>
      ];
      setHistory(prev => [...prev, ...whoamiResponse]);
    } else if (command === 'connect') {
      const tempHistory = [...newHistory, <p key="connect1">Attempting to establish secure connection...</p>];
      setHistory(tempHistory);
      try {
        const response = await fetch('/api/auth');
        if (!response.ok) throw new Error(`Status: ${response.status}`);
      } catch (error) {
        setHistory(prev => [...prev, <p key="connect_fail" className="text-danger">Connection failed. Status: 401 Unauthorized. Check network logs for details.</p>]);
      }
    } else if (command === 'compile kernel') {
      const compileMessages = [
        <p key="comp1">Compiling kernel module &apos;codex-core-v2.js&apos;...</p>,
        <p key="comp2">Outputting build files and sourcemap...</p>,
        <p key="comp3" className="text-warning">Warning: Source mapping appears to be enabled in a production environment.</p>
      ];
      setHistory(prev => [...prev, ...compileMessages]);
    } else if (command === 'cat /sys/logs/corrupted.log') {
      const logFile = [
        <p key="log1">Displaying contents of /sys/logs/corrupted.log:</p>,
        <p key="log2">--- BEGIN LOG ---</p>,
        <p key="log3">0x5A..[SYSTEM BOOT]..OK</p>,
        <p key="log4" className="text-danger">0x5B..[KERNEL PANIC]..MEMORY_FAULT at 0xFF8A</p>,
        <p key="log5">0x5C..[DATA DUMP FRAGMENT]..[PART_2]: NTl</p>,
        <p key="log6">0x5D..[REBOOT]..</p>,
        <p key="log7">0x6A..[SYSTEM BOOT]..OK</p>,
        <p key="log8">0x6B..[DATA DUMP FRAGMENT]..[PART_3]: F</p>,
        <p key="log9">0x6C..[CACHE FLUSH]..OK</p>,
        <p key="log10" className="text-danger">0x7A..[SEGFAULT]..CORE_DUMPED</p>,
        <p key="log11">0x7B..[DATA DUMP FRAGMENT]..[PART_1]: NzcuN</p>,
        <p key="log12">--- END LOG ---</p>,
      ];
      setHistory(prev => [...prev, ...logFile]);
    } else if (command === 'grep secret') {
      const grepResult = [
        <p key="grep1">Searching all system files for "secret"...</p>,
        <p key="grep2" className="text-danger">/dev/null: permission denied</p>,
        <p key="grep3">/var/data/fragments.db: file is encrypted</p>
      ];
      setHistory(prev => [...prev, ...grepResult]);
    } else if (command === 'sudo help') {
      setHistory(prev => [...prev, <p key="sudo1" className="text-warning">As you wish. But there is no help here, only consequences.</p>]);
    } else {
      setHistory(prev => [...prev, <p key={prev.length}>Command not found: {command}. Type &apos;help&apos; for a list of commands.</p>]);
    }
  };

  return (
    <>
      <main
        className="art-deco-frame"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '95vw',
          maxWidth: '900px',
          height: '90vh',
          maxHeight: '700px',
        }}
        onClick={() => document.getElementById('terminal-input')?.focus()}
      >
        <div ref={terminalRef} className="overflow-y-auto h-full">
          {history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">{line}</div>
          ))}
          {isTyping && (
            <p className="text-warning">&gt; Warden_7 is typing...<span className="cursor"></span></p>
          )}
        </div>
        <form onSubmit={handleCommand} className="absolute bottom-4 left-8 right-8">
          <div className="flex items-center">
            <span className="text-glow">&gt;</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none ml-2"
              autoFocus
            />
          </div>
        </form>
        <SystemInfo />
      </main>

      <div className="fixed bottom-4 left-4 text-gold z-20" title="Fragments Found">
        {unlockedFragments.length} / 7 Fragments Found
      </div>

      <button
        onClick={() => setIsValidatorOpen(true)}
        title="Submit Fragment"
        className="fixed bottom-4 right-4 z-20 flex items-center justify-center w-14 h-14 rounded-full border-2 border-current hover:scale-110 transition-transform duration-200"
        style={{
          color: '#ff4d4d',
          background: 'rgba(20, 0, 0, 0.6)',
          boxShadow: '0 0 10px #8b0000, 0 0 20px #ff1a1a, inset 0 0 8px rgba(255, 50, 50, 0.6)',
          textShadow: '0 0 6px #ff1a1a, 0 0 12px #ff4d4d',
          fontSize: '1.6rem',
        }}
      >
        [⍟]
      </button>

      {isValidatorOpen && <KeyValidator onClose={() => setIsValidatorOpen(false)} />}
    </>
  );
}
