'use server';

import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidateTag('cache');

  return NextResponse.json({
    revalidated: true,
  });
}
