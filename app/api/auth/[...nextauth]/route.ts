import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
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
      async authorize(credentials: { email: string; password: string }) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        const checkPassword = await comparePass(
          credentials.password,
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
    async session({ session, user, token }) {
      // console.log('Session Callbacks', session, user, token);
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('JWT Callbacks', token, user, account);
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
