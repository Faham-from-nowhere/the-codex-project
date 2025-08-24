// src/components/Terminal.tsx
'use client';
import KeyValidator from './KeyValidator'; 
import React, { useState, useEffect, useRef } from 'react';
import SystemInfo from './SystemInfo';
const HIDDEN_KERNEL_FRAGMENT = 'FRAG_3: MTIuOTdO';
import { useGame } from '@/context/GameContext'; 


const WELCOME_MESSAGE: React.ReactNode[] = [
  <p>THE CODEX PROJECT</p>,
  <p>A Retro-Cyber Intelligent System</p>,
  <p>---</p>,
  <p>
    Type 'help' to see available commands. Trust the{' '}
    <span
      className="secret-hover"
      data-secret="FRAG_1: MzkuOTUwNQ==" // Base64 for "39.9505"
    >
      source
    </span>
    .
  </p>,
  <p>&nbsp;</p>,
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
  // The binary for "NzcuNTlF" is hidden as spaces(0) and tabs(1) at the end of these lines
  const secretMessage = `
  ██████╗ ██████╗ ██████╗ ███████╗██╗  ██╗	
  ██╔══██╗██╔══██╗██╔══██╗██╔════╝╚██╗██╔╝ 
  ██████╔╝██║  ██║██║  ██║█████╗   ╚███╔╝	
  ██╔══██╗██║  ██║██║  ██║██╔══╝   ██╔██╗ 	
  ██████╔╝██████╔╝██████╔╝███████╗██╔╝ ██╗	
  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝ 
  `; // The secret ends here

  console.log(secretMessage);
  console.log(
    '%cSystem Alert: The blueprint is in the architecture itself. Notice the spacing.',
    'color: #ffb800; font-size: 14px;'
  );
}, []);
  
   const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase();
    
    const newHistory = [...history, <p>&gt; {input}</p>];
    setHistory(newHistory);
    setInput('');

    if (command === 'hint') {
      const hints = [
        "Hint 1/7: The welcome message contains more than it seems. The 'source' of the first fragment is closer than you think.",
        "Hint 2/7: Some connections are meant to fail. Check the logs of your failed `connect` attempt for a hidden transmission.",
        "Hint 3/7: The `compile kernel` command warns of a leak for a reason. A developer's mistake in the source code is your reward.",
        "Hint 4/7: The system logs are corrupted, but the data fragments are labeled. Reconstruct the sequence from the `cat` command's output.",
        "Hint 5/7: Warden_7 is a machine of rules. A seeker of truth must know the right protocol to issue an override.",
        "Hint 6/7: A successful breach opens new pathways. The AI mentioned new subroutines. Use its own diagnostic tools against it.",
        "Hint 7/7: The final diagnostic revealed the last step. The system is ready. It's time to execute the awakening."
      ];

      const nextHintIndex = unlockedFragments.length;
      if (nextHintIndex < hints.length) {
        setHistory(prev => [...prev, <p className="text-warning">{hints[nextHintIndex]}</p>]);
      } else {
        setHistory(prev => [...prev, <p className="text-glow">All fragments found. No more hints available.</p>]);
      }
    }

  if (command.startsWith('chat ')) {
    const message = input.substring(5);
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, unlockedFragments }),
      });
      const data = await response.json();
      setHistory(prev => [...prev, <p className="text-warning">{data.reply}</p>]);
    } catch (error) {
      setHistory(prev => [...prev, <p className="text-danger">AI connection error.</p>]);
    } finally {
      setIsTyping(false);
    }
  } else if (command === 'help') {
    setHistory(prev => [...prev, <p>Available commands: help, clear, whoami, connect, compile kernel, cat /sys/logs/corrupted.log, help, chat &lt;your_message&gt;</p>]);
  }
  else if (command === 'cat /sys/logs/corrupted.log') {
    const logFile = [
      <p>Displaying contents of /sys/logs/corrupted.log:</p>,
      <p>--- BEGIN LOG ---</p>,
      <p>0x5A..[SYSTEM BOOT]..OK</p>,
      <p className="text-danger">0x5B..[KERNEL PANIC]..MEMORY_FAULT at 0xFF8A</p>,
      <p>0x5C..[DATA DUMP FRAGMENT]..[PART_2]: NTl</p>,
      <p>0x5D..[REBOOT]..</p>,
      <p>0x6A..[SYSTEM BOOT]..OK</p>,
      <p>0x6B..[DATA DUMP FRAGMENT]..[PART_3]: F</p>,
      <p>0x6C..[CACHE FLUSH]..OK</p>,
      <p className="text-danger">0x7A..[SEGFAULT]..CORE_DUMPED</p>,
      <p>0x7B..[DATA DUMP FRAGMENT]..[PART_1]: NzcuN</p>,
      <p>--- END LOG ---</p>,
    ];
    setHistory(prev => [...prev, ...logFile]);
  } else if (command === 'grep secret') {
  const grepResult = [
    <p>Searching all system files for "secret"...</p>,
    <p className="text-danger">/dev/null: permission denied</p>,
    <p>/var/data/fragments.db: file is encrypted</p>
  ];
  setHistory(prev => [...prev, ...grepResult]);
} else if (command === 'sudo help') {
    setHistory(prev => [...prev, <p className="text-warning">As you wish. But there is no help here, only consequences.</p>]);
  }else if (command === 'clear') {
    setHistory(WELCOME_MESSAGE);
  } else if (command === 'whoami') {
    setHistory(prev => [...prev, <p>You are a seeker, an explorer of the digital unknown.</p>]);
  } else if (command === 'connect') {
    const tempHistory = [...newHistory, <p>Attempting to establish secure connection...</p>];
    setHistory(tempHistory);
    try {
      const response = await fetch('/api/auth');
      if (!response.ok) throw new Error(`Status: ${response.status}`);
    } catch (error) {
      setHistory(prev => [...prev, 
        <p className="text-danger">
          Connection failed. Status: 401 Unauthorized. Check network logs for details.
        </p>
      ]);
    }
  } else if (command === 'compile kernel') {
    const compileMessages = [
      <p>Compiling kernel module 'codex-core-v2.js'...</p>,
      <p>Outputting build files and sourcemap...</p>,
      <p className="text-warning">Warning: Source mapping appears to be enabled in a production environment.</p>
    ];
    setHistory(prev => [...prev, ...compileMessages]);
  } else {
    // This now correctly handles only the commands that are not found
    setHistory(prev => [...prev, <p>Command not found: {command}. Type 'help' for a list of commands.</p>]);
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
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        {isTyping && (
          <p className="text-warning">
            &gt; Warden_7 is typing...<span className="cursor"></span>
          </p>
        )}
      </div>

      <form
        onSubmit={handleCommand}
        className="absolute bottom-4 left-8 right-8"
      >
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

    {/* FRAGMENT COUNTER */}
      <div 
        className="fixed bottom-4 left-4 text-gold z-20"
        title="Fragments Found"
      >
        {unlockedFragments.length} / 7 Fragments Found
      </div>

    {/* Floating fragment button */}
    <button
  onClick={() => setIsValidatorOpen(true)}
  title="Submit Fragment"
  className="fixed bottom-4 right-4 z-20 flex items-center justify-center 
             w-14 h-14 rounded-full border-2 border-current 
             hover:scale-110 transition-transform duration-200"
  style={{
    color: '#ff4d4d', // 🔴 Dark red text & border (use #ff8c00 for dark orange)
    background: 'rgba(20, 0, 0, 0.6)', // translucent dark bg
    boxShadow: `
      0 0 10px #8b0000,
      0 0 20px #ff1a1a,
      inset 0 0 8px rgba(255, 50, 50, 0.6)
    `, // outer + inner glow
    textShadow: `
      0 0 6px #ff1a1a,
      0 0 12px #ff4d4d
    `,
    fontSize: '1.6rem',
  }}
>
  [⍟]
</button>

    {/* Modal/validator */}
    {isValidatorOpen && (
      <KeyValidator onClose={() => setIsValidatorOpen(false)} />
    )}
  </>
)};
