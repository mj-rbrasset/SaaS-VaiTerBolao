import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Google from 'next-auth/providers/google';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: Substituir com sua lógica de autenticação real (banco de dados)
        // Por enquanto, exemplo básico para demonstração
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // EXEMPLO - Em produção, verificar no banco de dados
        const user = {
          id: '1',
          name: 'Usuário Teste',
          email: credentials.email as string,
        };

        // Verificar senha (usar bcrypt em produção)
        if (credentials.password === 'senha123') {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
});
