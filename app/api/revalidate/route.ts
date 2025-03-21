import { NextRequest } from 'next/server';
import { revalidate } from '../../../lib/saleor';

export const runtime = 'edge';

export async function POST(req: NextRequest): Promise<Response> {
  return revalidate(req);
}
