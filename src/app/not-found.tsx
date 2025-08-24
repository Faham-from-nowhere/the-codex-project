// src/app/not-found.tsx
import Link from 'next/link';
import QRCodePuzzle from '@/components/QRCodePuzzle';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl text-glow-danger">[404 :: Corrupted Data Stream]</h1>
      <p className="mt-4 text-warning max-w-md">
        This data stream is a dead end. Check your system logs for the true source.
      </p>
      <div className="my-8"><QRCodePuzzle /></div>
      <Link href="/" className="inline-block text-glow hover:underline">&gt; Return to Terminal</Link>
    </main>
  );
}