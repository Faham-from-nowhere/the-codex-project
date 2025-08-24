// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  // This is the corrected secret fragment, which now matches your GameContext
  const secretFragment = 'FRAG_2: LTc3LjcMVw=='; // Correctly decodes to -77.71W

  const response = NextResponse.json(
    { error: 'ACCESS DENIED :: AUTHENTICATION TOKEN INVALID' },
    { status: 401 }
  );

  response.headers.set('X-Codex-Fragment', secretFragment);

  return response;
}
