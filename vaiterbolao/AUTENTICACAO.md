# 📝 Configuração da Autenticação - Vai Ter Bolão

## ✅ NextAuth.js Configurado

A autenticação foi implementada com sucesso usando NextAuth.js v5!

### 🔐 O que foi implementado:

1. **Providers de Autenticação:**
   - ✅ Credenciais (Email/Senha)
   - ✅ Google OAuth
   - ✅ GitHub OAuth

2. **Páginas:**
   - ✅ Login funcional em `/login`
   - ✅ Registro funcional em `/registro`
   - ✅ Dashboard protegido em `/dashboard`

3. **Funcionalidades:**
   - Server Actions para login/registro
   - Proteção de rotas
   - Redirecionamento automático
   - Mensagens de erro
   - Logout funcional

### 🚀 Como testar agora:

#### 1. Login com credenciais (TESTE):
- Email: qualquer email válido
- Senha: `senha123`

> ⚠️ **IMPORTANTE:** Isso é apenas para teste! Em produção, você precisa integrar com um banco de dados real.

#### 2. Configurar OAuth (Opcional):

**Google OAuth:**
1. Acesse: https://console.cloud.google.com/
2. Crie um projeto
3. Ative a Google+ API
4. Crie credenciais OAuth 2.0
5. Adicione URLs autorizadas:
   - Origem: `http://localhost:3000`
   - Redirecionamento: `http://localhost:3000/api/auth/callback/google`
6. Atualize `.env.local` com suas credenciais:
   ```
   GOOGLE_CLIENT_ID=seu-id
   GOOGLE_CLIENT_SECRET=seu-secret
   ```

**GitHub OAuth:**
1. Acesse: https://github.com/settings/developers
2. Clique em "New OAuth App"
3. Preencha:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Atualize `.env.local`:
   ```
   GITHUB_ID=seu-id
   GITHUB_SECRET=seu-secret
   ```

### 📂 Arquivos criados:

- `auth.ts` - Configuração principal do NextAuth
- `auth.config.ts` - Configurações de callbacks e páginas
- `app/api/auth/[...nextauth]/route.ts` - API route
- `app/actions/auth.ts` - Server actions para login/registro
- `app/dashboard/page.tsx` - Página protegida de exemplo
- `.env.local` - Variáveis de ambiente

### 🔄 Próximos passos sugeridos:

1. **Integrar com Banco de Dados:**
   - Instalar Prisma ou Drizzle ORM
   - Criar schema de usuários
   - Atualizar `authorize()` em `auth.ts` para verificar senha com bcrypt

2. **Melhorias de Segurança:**
   - Adicionar validação de email
   - Implementar recuperação de senha
   - Adicionar rate limiting

3. **Features:**
   - Perfil de usuário
   - Editar dados da conta
   - Avatar/foto de perfil

### 🧪 Para testar:

```bash
npm run dev
```

Acesse:
- http://localhost:3000 - Landing page
- http://localhost:3000/login - Login
- http://localhost:3000/registro - Criar conta
- http://localhost:3000/dashboard - Dashboard (requer login)
