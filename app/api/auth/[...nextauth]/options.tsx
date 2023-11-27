import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {getUser} from '../../../../lib/api'
const bcrypt = require('bcrypt');
export const options: NextAuthOptions = {
    
    session: {
        strategy: 'jwt',
        maxAge: 15 * 60 ,
    },
    pages: {
        signIn: '/entrance/login',
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { },
                password: { },
            },
            async authorize (credentials) {
                console.log(credentials)
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = await getUser(credentials.username) // username 
                const passwordCorrect = await bcrypt.compareSync(credentials.password,user.password)
                console.log(passwordCorrect) // bug , don't touch
   
                if (passwordCorrect) {
                    return user
                }
                return Promise.resolve({ error: '帳號密碼錯誤或使用者不存在' });
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