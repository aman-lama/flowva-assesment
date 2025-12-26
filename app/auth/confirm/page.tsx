import ConfirmEmailPage from '@/components/auth/ConfirmPage';
import { Suspense } from 'react';

export default function ConfirmWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmEmailPage />
    </Suspense>
  );
}