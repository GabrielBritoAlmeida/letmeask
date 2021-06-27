import { NewRoomTemplate } from 'templates/NewRoom'
import { NewRoomProvider } from 'hooks/context/NewRoom'

export function NewRoom() {
  return (
    <NewRoomProvider>
      <NewRoomTemplate />
    </NewRoomProvider>
  )
}
