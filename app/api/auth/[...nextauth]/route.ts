import NextAuth, { RequestInternal } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { comparePass } from '@/lib/bcryptLib';
import { prisma } from '@/lib/prisma';

const handler = NextAuth({
  session: { strategy: 'jwt' },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
        req: Pick<RequestInternal, 'query' | 'body' | 'headers' | 'method'>
      ) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        const checkPassword = await comparePass(
          credentials?.password || '',
          user?.password || ''
        );

        if (checkPassword) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user !== undefined) {
        session.user.id = token.user.id;
      }
      // console.log('Session Callbacks', session, token);
      return session;
    },
    async jwt({ token, user }) {
      // console.log('JWT Callbacks', token.user);
      if (user) {
        token.user = user;
      }

      return Promise.resolve(token);
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});

export { handler as GET, handler as POST };
