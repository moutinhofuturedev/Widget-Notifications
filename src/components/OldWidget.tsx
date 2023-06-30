import { Trash, KeyRound, PartyPopper } from 'lucide-react'

const OldWidget = () => {
  return (
    // Old Section
    <div className="w-[448px] rounded overflow-hidden">
      <section>
        <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <KeyRound className="w-6 h-6 text-blue-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p
                className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
                data-testid="p"
              >
                Sua senha espirou. Veja como configurar sua nova senha.
              </p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Mensagem</span>
                <span>Há 2 meses</span>
              </div>
            </div>
            <div className="flex self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-blue-500 hover:bg-blue-400 transition-colors">
                <Trash className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>

          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <PartyPopper className="w-6 h-6 text-blue-500 mt-3" />
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Parabéns,você recebeu uma nova certificação.Compartilhe!!!
              </p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Mensagem</span>
                <span>Há 3 meses</span>
              </div>
            </div>
            <div className="flex self-center">
              <button
                className="w-8 h-8 rounded flex items-center justify-center bg-blue-500 hover:bg-blue-400 transition-colors"
                data-testid="trash"
              >
                <Trash className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OldWidget
