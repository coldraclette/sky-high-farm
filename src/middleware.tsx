import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname === '/SUPPORT') {
    const destination = new URL('/support', request.url);
    return NextResponse.redirect(destination);
  }

  return NextResponse.next();
}
