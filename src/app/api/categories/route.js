import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

/**
 * Retrieves all categories from the database using Prisma and returns them as a JSON response.
 * If an error occurs, returns a JSON response with a status code of 500 and a message indicating the error.
 *
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the categories as a JSON string.
 */
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
  }
};
