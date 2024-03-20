import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { comparePass } from './bcryptLib';

export const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: { email: string; password: string }, _req) {
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
    async jwt({ token, user, account }) {
      // console.log('JWT Callbacks:', { token, user, account });

      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('Session Callbacks:', { session, token, user });

      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  adapter: PrismaAdapter(prisma),
});
