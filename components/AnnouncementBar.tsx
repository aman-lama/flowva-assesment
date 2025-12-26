
'use client'

import { useAnnouncement } from '@/context/AnouncementContext'

export default function AnnouncementBar() {
  const { announcement, loading } = useAnnouncement()

  if (loading || !announcement) return null

  return (
    <div className="w-full bg-neutral-900 text-white px-4 py-3 text-center text-sm md:text-base">
      
      <span className="opacity-90">
        {announcement.message}
      </span>
    </div>
  )
}
