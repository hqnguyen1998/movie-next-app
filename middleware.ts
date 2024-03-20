import { auth } from '@/lib/auth';

const authRoutes = ['/auth/signin', '/auth/register'];
const adminRoutes = ['/dashboard'];

export default auth((req) => {
  const url = req.nextUrl;
  const route: string = req.nextUrl.pathname;
  const isLoggedIn = !!req.auth;

  if (authRoutes.filter((r) => r === route).length && isLoggedIn) {
    return Response.redirect(new URL('/dashboard', url));
  }

  if (
    adminRoutes.filter((r) => r.startsWith(route) && route !== '/').length &&
    !isLoggedIn
  ) {
    return Response.redirect(new URL('/auth/signin', url));
  }

  if (
    adminRoutes.filter((r) => r.startsWith(route) && route !== '/').length &&
    req.auth?.user.role !== 'administrator'
  ) {
    return Response.redirect(new URL('/', url));
  }

  return null;
});

// export const config = {
//   matcher: ['/dashboard/:path*', '/auth/signin'],
// };

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
