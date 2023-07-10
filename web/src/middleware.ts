import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('TESTE')
}

export const config = {
  matcher: '/memories/:path*',
}
