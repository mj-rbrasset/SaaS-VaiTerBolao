import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black">
      {/* Header */}
      <header className="border-b border-green-100 dark:border-green-900">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
                ⚽ Vai Ter Bolão
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
              >
                Entrar
              </Link>
              <Link
                href="/registro"
                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
              >
                Criar Conta
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Organize o Bolão da Copa do Mundo
            <span className="block text-green-600 dark:text-green-400">de forma simples e rápida</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Crie seu bolão, convide seus amigos, família ou colegas de trabalho. 
            Acompanhe os resultados em tempo real e torne a Copa ainda mais emocionante!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/registro"
              className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Começar Agora - É Grátis
            </Link>
            <Link
              href="#features"
              className="text-base font-semibold leading-7 text-gray-900 dark:text-white"
            >
              Saiba mais <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-20">
          <h3 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Tudo que você precisa para seu bolão
          </h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Criação Fácil
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Crie seu bolão em minutos. Configure regras personalizadas e comece a diversão.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Convide Participantes
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Compartilhe via WhatsApp, email ou link. Gerenciamento simplificado de participantes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Ranking em Tempo Real
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Acompanhe a classificação atualizada automaticamente após cada jogo.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Palpites Rápidos
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Interface intuitiva para fazer palpites de todos os jogos rapidamente.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                Notificações
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Receba lembretes antes dos jogos e notificações de resultados.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm dark:border-green-900 dark:bg-gray-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                100% Seguro
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Seus dados protegidos e bolões privados. Só participantes convidados têm acesso.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="rounded-2xl bg-green-600 px-6 py-16 text-center shadow-xl dark:bg-green-700 sm:px-16">
            <h3 className="text-3xl font-bold text-white">
              Pronto para criar seu bolão?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
              Junte-se a milhares de pessoas que já estão organizando seus bolões com a gente.
            </p>
            <div className="mt-8">
              <Link
                href="/registro"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-green-600 shadow-sm hover:bg-gray-50"
              >
                Criar Minha Conta Grátis
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © 2026 Vai Ter Bolão. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
