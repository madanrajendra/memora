import React, { useState } from 'react';
import { Mail, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, getFirebaseErrorMessage } from '../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const { loginWithEmail, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] relative z-10 mx-auto">
      {/* Gradient Border Wrapper for Glassmorphism Card */}
      <div className="relative rounded-[24px] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        
        {/* Main Card Content */}
        <div className="bg-[#06070A]/40 backdrop-blur-xl rounded-[23px] p-8 md:p-10 w-full">
          
          <h2 className="font-albert text-2xl text-white uppercase tracking-wider mb-8">
            Login
          </h2>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-dm animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleEmailLogin}>
            
            {/* Email Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
              </div>
              <input
                id="login-email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 font-dm text-base focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                required
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {showPassword ? (
                  <Eye className="h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
                ) : (
                  <EyeOff className="h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
                )}
              </div>
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-12 pr-12 text-white placeholder:text-white/40 font-dm text-base focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white focus:outline-none transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between px-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 rounded border border-white/30 bg-black/30 group-hover:border-white/50 transition-colors">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="absolute inset-0 bg-white/80 scale-0 peer-checked:scale-75 rounded-[2px] transition-transform duration-200 ease-out" />
                </div>
                <span className="text-white/80 font-dm text-xs tracking-wide select-none group-hover:text-white transition-colors">
                  Remember me
                </span>
              </label>
              
              <Link to="/forgot-password" title="Go to Forgot Password Page" className="text-memora-gray hover:text-white font-dm text-xs tracking-wide transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button
                id="login-submit"
                type="submit"
                disabled={loading}
                className="w-full relative group overflow-hidden rounded-full p-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-full py-3.5 flex items-center justify-center gap-2 group-hover:bg-black/40 transition-colors duration-300">
                  {loading && <Loader2 className="h-4 w-4 animate-spin text-white/70" />}
                  <span className="font-dm font-medium text-white text-[15px] tracking-wide">
                    {loading ? 'Signing In…' : 'Log In'}
                  </span>
                </div>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1px] w-full bg-white/20" />
            <span className="text-white/80 font-dm text-sm whitespace-nowrap">
              Or Sign In with
            </span>
            <div className="h-[1px] w-full bg-white/20" />
          </div>

          {/* Google Login */}
          <div className="mt-6 flex justify-center">
            <button
              id="google-login"
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/10 bg-black/30 hover:bg-white/5 hover:border-white/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {googleLoading ? (
                <Loader2 className="h-5 w-5 animate-spin text-white/70" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              <span className="font-dm text-sm text-white/80 group-hover:text-white transition-colors">
                Continue with Google
              </span>
            </button>
          </div>

          {/* Navigation Link */}
          <div className="mt-8 text-center">
            <span className="text-white/60 font-dm text-sm">Don't have an account? </span>
            <Link to="/register" className="text-[#38bdf8] hover:text-white font-dm text-sm transition-colors">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
