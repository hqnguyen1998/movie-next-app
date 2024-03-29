import { withAuth } from 'next-auth/middleware';
// export { default } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log('middleware', req.nextauth.token);

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token }) {
        return token?.user?.role === 'administrator';
      },
    },
  }
);

export const config = { matcher: ['/dashboard/:path*'] };
