import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  var random = getRandomInt(2);

  const bucket = random === 0 ? 'a' : 'b';

  const res = NextResponse.rewrite(`/home/${bucket}`);

  res.cookie('test-cookie-from-edge', bucket);

  return res;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}