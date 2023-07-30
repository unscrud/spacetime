import { EmptyMemories } from '@/components/EmptyMemories'
import { cookies } from 'next/headers'

export default async function Home() {
  const isAutenticated = cookies().has('token')

  if (!isAutenticated) {
    return <EmptyMemories />
  }
}
