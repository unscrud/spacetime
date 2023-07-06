import { getUser } from '@/lib/auth'

export function Profile() {
  const { name, avatarUrl } = getUser()

  console.log(name, avatarUrl)

  return <p> oi </p>
}
