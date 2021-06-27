import {
  createContext,
  ReactNode,
  useContext,
  useState,
  FormEvent,
  useCallback
} from 'react'
import { database } from 'services/firebase'
import { useAuthentication } from '../Authentication'

type NewRoomProviderProps = {
  children: ReactNode
}

type NewRoomContextProps = {
  newRoom?: string
  setNewRoom: (newRoom: string) => void
  handleCreateRoom: (event: FormEvent) => Promise<void>
}

const NewRoomContext = createContext({} as NewRoomContextProps)

export function NewRoomProvider({ children }: NewRoomProviderProps) {
  const [newRoom, setNewRoom] = useState('')
  const { user } = useAuthentication()

  const handleCreateRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      if (newRoom.trim() === '') return

      const roomRef = database.ref('rooms')

      // const firebaseRoom =
      await roomRef.push({
        title: newRoom.trim(),
        authorId: user?.id
      })
    },
    [newRoom, user?.id]
  )

  return (
    <NewRoomContext.Provider value={{ newRoom, setNewRoom, handleCreateRoom }}>
      {children}
    </NewRoomContext.Provider>
  )
}

export function useNewRoomContext() {
  return useContext(NewRoomContext)
}
