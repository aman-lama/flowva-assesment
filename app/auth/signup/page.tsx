/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { signup } from '@/actions/auth/action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '@/components/Loader';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const validateForm = () => {
    const { email, confirmEmail, password, confirmPassword } = formData;
    const newErrors: { [key: string]: string } = {};

    if (!email) newErrors.email = 'Email is required';
    if (!confirmEmail) newErrors.confirmEmail = 'Please confirm your email';
    if (email && confirmEmail && email !== confirmEmail)
      newErrors.confirmEmail = 'Emails do not match';

    if (!password) newErrors.password = 'Password is required';
    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );

    const success = await signup(data);

    if (success) {
      toast.success('Signup successful! Please check your email.');
      router.push('/auth/email');
    } else {
      toast.error('Signup failed.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white text-gray-800">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 min-h-75 bg-purple-400 md:min-h-screen">
        
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="px-6 text-center">
            <h2 className="text-gray-300 text-3xl md:text-4xl font-bold leading-tight">
            Turn productivity  into <span className="text-green-600">Rewards</span><br />with a calm, smart
            space that organizes your tools, and keeps you in control.
              
            </h2>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-[#f9f9f9]">
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f9] rounded-3xl px-8 py-10 w-full max-w-xl"
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
            Create your account
          </h1>

          {/* Fields */}
          <div className="space-y-4">
            {[
              { name: 'email', label: 'Email', type: 'text', placeholder: 'you@gmail.com' },
              { name: 'confirmEmail', label: 'Confirm Email', type: 'text', placeholder: 'you@gmail.com' },
              { name: 'password', label: 'Password', type: 'password', placeholder: '********' },
              { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: '********' },
            ].map(field => (
              <div key={field.name}>
                <Label className="text-sm text-gray-700 mb-1 block">
                  {field.label}
                </Label>
                <Input
                  name={field.name}
                  type={field.type}
                  value={(formData as any)[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="bg-[#f9f9f9] border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-green-100 rounded-xl px-4 py-2.5 text-sm"
                />
                {errors[field.name] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white mt-2"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Sign Up'}
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="underline text-green-700">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
