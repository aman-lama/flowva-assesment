
'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Missing email or password.' };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error('Login failed:', error.message);
    return { error: error.message };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  revalidatePath
  return { success: true };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // Extract all relevant fields from formData
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Signup user with Supabase Auth
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signupError) {
    console.error('Signup error:', signupError);
    return false;
  }

  const user = signupData.user;
  if (!user) {
    console.error('User not created after signup');
    return false;
  }

  return true;
}

  


  export async function logout() {
    const supabase = await createClient();
  
    await supabase.auth.signOut();
  
    // 🧹 Manually remove Supabase auth cookies
    const cookieStore = await cookies();
    cookieStore.delete('sb-access-token');
    cookieStore.delete('sb-refresh-token');
  
    redirect('/auth/login');
  }