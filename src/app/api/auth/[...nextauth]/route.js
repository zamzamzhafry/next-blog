import { authOptions } from '@/utils/auth';
import NextAuth from 'next-auth';

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// src/pages/api/auth/[...nextauth].js
// import NextAuth from 'next-auth';
// import { authOptions } from '@/utils/auth';

// export default NextAuth(authOptions);
