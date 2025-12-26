'use client';

import { useState } from 'react';
import { login } from '@/actions/auth/action';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    try {
      const result = await login(formData);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success('Login successful!');
        window.location.href = '/dashboard';
      }
    } catch (error) {
      toast.error('Something went wrong.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white text-gray-800">

      {/* Left Image Section */}

      <div className="relative bg-purple-400 w-full md:w-1/2 min-h-75 md:min-h-screen">

        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="px-6 text-center">
            <h2 className="text-gray-300 text-3xl md:text-4xl font-bold leading-tight">
              Welcome Back, <br />
              Turn productivity into Rewards<br /> <span className='text-sm'>Powered by
                <span className="text-green-600"> Flowvahub</span></span>
            </h2>
          </div>
        </div>
      </div>

      {/* Right Login Form */}

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-[#f9f9f9]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f9] rounded-3xl px-8 py-10 w-full max-w-xl font-sans"
        >
          {/* Logo */}

          <div className="flex justify-center mb-4">
            <Image
              src="/logo-full.png"
              alt="As Green Logo"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Title */}

          <h1 className="text-xl font-medium text-center text-black-800 mb-8">
            Login to Your Account
          </h1>

          {/* Email */}

          <div className="mb-4">
            <Label htmlFor="email" className="text-sm text-gray-700 mb-1 block">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="bg-[#f9f9f9] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-2.5 text-sm transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Password */}

          <div className="mb-6">
            <Label htmlFor="password" className="text-sm text-gray-700 mb-1 block">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="********"
              className="bg-[#f9f9f9] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-2.5 text-sm transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Login Button */}

          <Button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>

          {/* Link to Signup */}
          
          <div className="text-center text-sm text-gray-500 mt-6">
            Don&appos;t have an account?{' '}
            <Link href="/auth/signup" className="underline text-green-700">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
