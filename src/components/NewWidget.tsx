import { Rocket, X, Check, Info } from 'lucide-react'

export const NewWidget = () => {
  return (
    <div className="w-[448px]">
      {/* Header */}
      <header className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between rounded-t">
        <span className="font-bold">Notificações</span>
        <button className="text-blue-500 font-bold text-xs hover:text-blue-400 transition-colors">
          MARCAR TODAS COMO VISTAS
        </button>
      </header>

      {/* Recent Section */}
      <section>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className="w-6 h-6 text-blue-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                Você recebeu um convite para fazer parte da empresa Rocketseat.
              </p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Mensagem</span>
                <span>Há 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-500 transition-colors">
                <X className="w-3 h-3 text-zinc-50" />
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-blue-500 hover:bg-blue-400 transition-colors">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>

          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Info className="w-6 h-6 text-blue-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100">
                Atualiza seus dados para receber novas informações
              </p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Mensagem</span>
                <span>Há 2 horas</span>
              </div>
            </div>
            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-500 transition-colors">
                <X className="w-3 h-3 text-zinc-50" />
              </button>
              <button className="w-8 h-8 rounded flex items-center justify-center bg-blue-500 hover:bg-blue-400 transition-colors">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
