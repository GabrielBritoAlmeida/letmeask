import { HomeTemplate } from 'templates/Home'
import { NewRoomProvider } from 'hooks/context/NewRoom'

export function Home() {
  return (
    <NewRoomProvider>
      <HomeTemplate />
    </NewRoomProvider>
  )
}
