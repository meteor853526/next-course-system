import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt';
import {getUser} from '../../../../lib/api'

export const options: NextAuthOptions = {
    
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { },
                password: { },
                role: { }
            },
            async authorize (credentials) {
                console.log(credentials)
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = await getUser(credentials.username) // username 
             
                // const passwordCorrect = await compare(
                //     credentials?.password || '',
                //     result[0].password
                // );
                
                // console.log({ passwordCorrect });

                // wait for signupFinish 
                // pass

                if (user) {
                    if (credentials.password === user.password) {
                      return user// problems with "strict" mode issues 
                      // see https://github.com/nextauthjs/next-auth/issues/2701 for more info
                    }
                }
                return null;
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user){
                token.role = user.role 
                token.account = user.account
            } 
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user){
                session.user.role = token.role
                session.user.account = token.account
            } 
            return session
        },
    }
    
}