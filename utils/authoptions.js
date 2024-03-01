import GithubProvider from 'next-auth/providers/github'
import prisma from '../prisma/index'
import { PrismaAdapter } from '@auth/prisma-adapter'


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
};