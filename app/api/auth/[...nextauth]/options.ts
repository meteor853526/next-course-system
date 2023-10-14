import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import executeQuery from '../../../../utils/executeQuery'
import { compare } from 'bcrypt';
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
            async authorize(credentials) {
                console.log(credentials)
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                
                const user = await executeQuery({
                    query: 'SELECT * FROM user WHERE account = ?',
                    values: [credentials.username],
                });
                console.log(user[0])
                console.log(user[0].password)
                console.log(credentials.password) 
                // const passwordCorrect = await compare(
                //     credentials?.password || '',
                //     result[0].password
                // );
                
                // console.log({ passwordCorrect });

                // wait for signupFinish 
                // pass

                if (user) {
                    if (credentials.password === user[0].password) {
                      return user[0];
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
                token.id = user.id
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