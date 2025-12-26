'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { toast } from 'sonner';
import Image from 'next/image';

export default function ConfirmEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const confirm = async () => {
      const token_hash = searchParams.get('token_hash');
      const type = searchParams.get('type');

      if (!token_hash || !type) {
        toast.error('Invalid or expired confirmation link.');
        router.push('/auth/login');
        return;
      }

      if (type === 'email') {
        const { error } = await supabase.auth.verifyOtp({
          type: 'email',
          token_hash,
        });

        if (error) {
          console.error('Email confirmation failed:', error.message);
          toast.error('Email confirmation failed.');
        } else {
          toast.success('Email confirmed! You can now log in.');
        }

        router.push('/auth/login');
      } else {
        toast.error('Unsupported confirmation type.');
        router.push('/auth/login');
      }

      setLoading(false);
    };

    confirm();
  }, [searchParams, supabase, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] text-gray-800 px-6">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-8 max-w-md w-full text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo-full.png"
            alt="Flowvahub"
            width={150}
            height={150}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-700">
          {loading ? 'Confirming your email...' : 'Redirecting'}
        </h2>

        <p className="text-sm text-gray-500">
          {loading
            ? 'Please wait while we verify your email address.'
            : 'Almost there... taking you to login.'}
        </p>
      </div>
    </div>
  );
}