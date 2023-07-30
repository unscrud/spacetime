import { EmptyMemories } from '@/components/EmptyMemories'
import { cookies } from 'next/headers'

export default function Home() {
  const isAutenticated = cookies().has('token')

  if (!isAutenticated) {
    return <EmptyMemories />
  }
}
