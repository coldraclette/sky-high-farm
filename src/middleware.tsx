import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  // Check if the pathname is '/SUPPORT' and redirect to '/support'
  if (url.pathname === '/SUPPORT') {
    // Construct an absolute URL for the redirect
    const destination = new URL('/support', request.url);
    return NextResponse.redirect(destination);
  }

  return NextResponse.next();
}
