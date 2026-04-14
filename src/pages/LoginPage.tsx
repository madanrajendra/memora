import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full relative flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 selection:bg-memora-purple/30 selection:text-white">
      <Background />
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 md:gap-12 animate-in fade-in duration-1000 slide-in-from-bottom-8">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
