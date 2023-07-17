import { articles } from '@/data/articles';

export async function GET() {
  return new Response(JSON.stringify(articles), { status: 200 });
}
