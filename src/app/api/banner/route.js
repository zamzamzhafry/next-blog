import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';
import { getAuthSession } from '@/utils/auth';

/**
 * Retrieves all categories from the database using Prisma and returns them as a JSON response.
 * If an error occurs, returns a JSON response with a status code of 500 and a message indicating the error.
 *
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the categories as a JSON string.
 */
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const cat = searchParams.get('cat');

  const POST_PER_PAGE = 2;

  // This query object is used to define the parameters for the database query.
  // It specifies how many posts to retrieve (POST_PER_PAGE) and how many posts to skip (POST_PER_PAGE * (page - 1)).
  // If the 'cat' parameter is provided in the URL, it will filter the results to only include posts with that category slug.
  const query = {
    take: POST_PER_PAGE, // Number of posts to retrieve
    skip: POST_PER_PAGE * (page - 1), // Number of posts to skip
    where: {
      ...(cat && { catSlug: cat }), // Filter results by category slug if provided
    },
  };
  try {
    // const posts = await prisma.post.findMany({
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 }));
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
