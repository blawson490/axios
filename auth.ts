import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

import { userPasswords, users } from './app/lib/placeholder-data';
import { User } from './app/lib/definitions';

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = users.find(user => user.userPrincipalName === email)
        return user
    } catch (error) {
        console.error('Failed to fetch user:', error)
        throw new Error('Failed to fetch user.')
    }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);
            
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    const userPassword = userPasswords.find(up => up.userId === user.id);
                    if (!userPassword) return null;
                    const passwordsMatch = password === userPassword?.password
                    if (passwordsMatch) return user;
                }    
              console.log('Invalid credentials');
            return null;
        }
    })
  ]
});