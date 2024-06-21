import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

/**
 * Retrieves all categories from the database using Prisma and returns them as a JSON response.
 * If an error occurs, returns a JSON response with a status code of 500 and a message indicating the error.
 *
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the categories as a JSON string.
 */
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page');
  const POST_PER_PAGE = 2;
  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: (parseInt(page) - 1) * POST_PER_PAGE,
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
