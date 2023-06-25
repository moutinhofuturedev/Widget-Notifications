import { NewWidget } from '@/components/NewWidget'
import { OldWidget } from '@/components/OldWidget'

export default function Home() {
  return (
    <main className="h-screen bg-zinc-50 dark:bg-black flex items-center flex-col justify-center text-zinc-600 dark:text-zinc-50">
      <NewWidget />
      <OldWidget />
    </main>
  )
}
