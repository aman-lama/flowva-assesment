'use client';

import { logout } from '@/actions/auth/action';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-6">
      <p className="text-lg">This is the dashboard page.</p>

      {/* Server Action */}
      
      <form action={logout}>
        <Button
          type="submit"
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white"
        >
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
