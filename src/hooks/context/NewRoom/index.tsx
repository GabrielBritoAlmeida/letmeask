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
  roomCode?: string
  setRoomCode: (roomCode: string) => void
  setNewRoom: (newRoom: string) => void
  handleCreateRoom: (event: FormEvent) => Promise<string | null | undefined>
  handleJoinRoom: () => Promise<boolean | undefined>
}

const NewRoomContext = createContext({} as NewRoomContextProps)

export function NewRoomProvider({ children }: NewRoomProviderProps) {
  const [newRoom, setNewRoom] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const { user } = useAuthentication()

  const handleCreateRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      if (newRoom.trim() === '') return

      try {
        const roomRef = database.ref('rooms')
        const firebaseRoom = await roomRef.push({
          title: newRoom.trim(),
          authorId: user?.id
        })

        return firebaseRoom.key
      } catch (error) {
        console.error('error: ', error)
        return null
      }
    },
    [newRoom, user?.id]
  )

  const handleJoinRoom = useCallback(async () => {
    if (roomCode.trim() === '') return

    const roomRef = await database.ref(`rooms/${roomCode}`).get()

    if (roomRef) {
      return true
    }

    if (!roomRef) {
      alert('Room does not exists')
      return false
    }
  }, [roomCode])

  return (
    <NewRoomContext.Provider
      value={{
        newRoom,
        setNewRoom,
        roomCode,
        setRoomCode,
        handleCreateRoom,
        handleJoinRoom
      }}
    >
      {children}
    </NewRoomContext.Provider>
  )
}

export function useNewRoomContext() {
  return useContext(NewRoomContext)
}
