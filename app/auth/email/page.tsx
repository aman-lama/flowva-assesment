'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function EmailConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] px-6">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-10 max-w-md w-full text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo-full.png"
            alt="As Green Logo"
            width={150}
            height={80}
            priority
          />
        </div>

        <h2 className="text-2xl font-semibold text-black">
          Check Your Email
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          We&apos;ve sent you a confirmation link to your email.
          <br />
          Please open it and verify your account to continue.
        </p>

        <div className="flex justify-center pt-2">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/auth/login">Back to Login</Link>
          </Button>
        </div>

        <p className="text-xs text-gray-400">
          Didn&apos;t receive it? Check your spam folder or wait a moment.
        </p>
      </div>
    </div>
  );
}