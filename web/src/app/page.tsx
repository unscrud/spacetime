import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

export default async function Home() {
  const isAutenticated = cookies().has('token')

  if (!isAutenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value

  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories = response.data

  return <div>{JSON.stringify(memories)}</div>
}
