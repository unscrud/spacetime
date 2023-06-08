import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="m-10 h-20 w-20 rounded bg-red-500 text-2xl font-bold uppercase">
      <h1 className="font-sans">Olá</h1>
      <h1 className="font-alt">Mundo!</h1>
      <Button title="btn A" />
      <Button title="btn B" />
      <Button title="btn C" />
    </div>
  )
}
