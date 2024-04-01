import NextAuth from 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      /** The user's name. */
      id?: string | null;
      name?: string | null;
      email?: string | null;
      emailVerified?: Date | null;
      image?: string | null;
      password?: string | null;
      role?: string | null;
      createdAt?: string | null;
    };
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      emailVerified?: Date | null;
      image?: string | null;
      password?: string | null;
      role?: string | null;
      createdAt?: string | null;
    };
  }
}
