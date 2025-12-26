'use server'


import { createClient } from '@/utils/supabase/server'

export async function getActiveAnnouncement() {
    const supabase = await createClient();

  const { data, error } = await supabase
    .from('app_announcement')
    .select('id, title, message, created_at')
    .eq('is_active', true)
    .single()

  if (error) {
    // Important: don't throw, allow UI to fail gracefully
    return null
  }

  return data
}
