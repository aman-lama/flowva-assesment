'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import { getActiveAnnouncement } from '@/actions/announcement/getAnnouncement'

type Announcement = {
  id: string
  title: string
  message: string
  created_at: string
}

type AnnouncementContextType = {
  announcement: Announcement | null
  loading: boolean
  refresh: () => Promise<void>
}

const AnnouncementContext =
  createContext<AnnouncementContextType | null>(null)

export function AnnouncementProvider({ children }: { children: ReactNode }) {
  const [announcement, setAnnouncement] =
    useState<Announcement | null>(null)

  const [loading, setLoading] = useState(true)

  const fetchedRef = useRef(false)

  const fetchAnnouncement = async (force = false) => {
    if (fetchedRef.current && !force) return

    fetchedRef.current = true

    try {
      const data = await getActiveAnnouncement()
      setAnnouncement(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnnouncement()
  }, [])

  return (
    <AnnouncementContext.Provider
      value={{
        announcement,
        loading,
        refresh: async () => {
          setLoading(true)
          await fetchAnnouncement(true)
        },
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  )
}

export function useAnnouncement() {
  const context = useContext(AnnouncementContext)

  if (!context) {
    throw new Error(
      'useAnnouncement must be used within AnnouncementProvider'
    )
  }

  return context
}
