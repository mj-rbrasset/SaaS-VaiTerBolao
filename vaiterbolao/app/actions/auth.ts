'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciais inválidas.';
        default:
          return 'Algo deu errado.';
      }
    }
    throw error;
  }
}

export async function signInWithGoogle() {
  await signIn('google', { redirectTo: '/dashboard' });
}

export async function signInWithGitHub() {
  await signIn('github', { redirectTo: '/dashboard' });
}

export async function handleSignOut() {
  await signOut({ redirectTo: '/' });
}

export async function registerUser(
  prevState: string | undefined,
  formData: FormData,
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  // Validações básicas
  if (!name || !email || !password || !confirmPassword) {
    return 'Preencha todos os campos.';
  }

  if (password !== confirmPassword) {
    return 'As senhas não conferem.';
  }

  if (password.length < 8) {
    return 'A senha deve ter no mínimo 8 caracteres.';
  }

  try {
    // TODO: Implementar lógica de registro no banco de dados
    // Por enquanto, apenas simula o registro
    console.log('Registrando usuário:', { name, email });

    // Após registrar, fazer login automático
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    return 'Erro ao criar conta. Tente novamente.';
  }
}
