import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

/**
 * Handles the GET request to update a post's views.
 *
 * @param {Object} req - The request object
 * @param {Object} params - The parameters object containing the slug
 * @return {NextResponse} A response with the updated post data or an error message
 */
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify({ data: post }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
