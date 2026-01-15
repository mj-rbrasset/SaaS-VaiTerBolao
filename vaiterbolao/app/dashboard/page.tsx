import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { handleSignOut } from '@/app/actions/auth';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black">
      <header className="border-b border-green-100 dark:border-green-900 bg-white dark:bg-gray-900">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
                ⚽ Vai Ter Bolão
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Olá, {session.user.name || session.user.email}
              </span>
              <form action={handleSignOut}>
                <button
                  type="submit"
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Sair
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Bem-vindo ao Vai Ter Bolão!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card: Meus Bolões */}
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Meus Bolões
              </h3>
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">0</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Nenhum bolão criado ainda
            </p>
          </div>

          {/* Card: Participações */}
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Participações
              </h3>
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">0</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Não está participando de nenhum bolão
            </p>
          </div>

          {/* Card: Criar Bolão */}
          <div className="rounded-lg border border-green-600 bg-green-50 p-6 shadow-sm dark:border-green-500 dark:bg-green-900/20">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
              Criar Novo Bolão
            </h3>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              Organize um bolão para a próxima Copa do Mundo
            </p>
            <button className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">
              Criar Bolão
            </button>
          </div>
        </div>

        {/* Seção de próximos passos */}
        <div className="mt-12 rounded-lg border border-green-100 bg-white p-8 dark:border-green-900 dark:bg-gray-900">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Próximos Passos
          </h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Crie seu primeiro bolão
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Configure as regras e comece a convidar participantes
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Convide amigos
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Compartilhe o link do bolão via WhatsApp ou email
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Faça seus palpites
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Preencha os placares antes do início dos jogos
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
