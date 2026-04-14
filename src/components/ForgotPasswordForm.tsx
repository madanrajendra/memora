import React, { useState } from 'react';
import { Mail, Loader2, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth, getFirebaseErrorMessage } from '../contexts/AuthContext';

const ForgotPasswordForm: React.FC = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(getFirebaseErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] relative z-10 mx-auto">
      {/* Gradient Border Wrapper for Glassmorphism Card */}
      <div className="relative rounded-[24px] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
        
        {/* Main Card Content */}
        <div className="bg-[#06070A]/40 backdrop-blur-xl rounded-[23px] p-8 md:p-10 w-full">
          
          <h2 className="font-albert text-2xl text-white uppercase tracking-wider mb-2">
            Reset Password
          </h2>
          <p className="text-white/60 font-dm text-sm mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-dm animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success ? (
            <div className="space-y-6">
              <div className="flex flex-col items-center justify-center p-8 bg-memora-purple/10 border border-memora-purple/20 rounded-2xl text-center gap-4 animate-in zoom-in-95 duration-500">
                <div className="bg-memora-purple/20 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-[#38bdf8]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium text-lg font-dm">Reset Email Sent!</h3>
                  <p className="text-white/60 text-sm font-dm leading-relaxed">
                    Check your inbox at <span className="text-white font-medium">{email}</span> for instructions.
                  </p>
                </div>
              </div>
              <Link
                to="/login"
                className="w-full bg-white/10 border border-white/10 rounded-full py-3.5 flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 text-white font-dm font-medium text-[15px]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
                </div>
                <input
                  id="forgot-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-full py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 font-dm text-base focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all font-dm"
                  required
                  disabled={loading}
                />
              </div>

              {/* Reset Button */}
              <div className="pt-4">
                <button
                  id="forgot-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full relative group overflow-hidden rounded-full p-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full bg-black/60 backdrop-blur-sm border border-white/10 rounded-full py-3.5 flex items-center justify-center gap-2 group-hover:bg-black/40 transition-colors duration-300">
                    {loading && <Loader2 className="h-4 w-4 animate-spin text-white/70" />}
                    <span className="font-dm font-medium text-white text-[15px] tracking-wide">
                      {loading ? 'Sending Link…' : 'Send Reset Link'}
                    </span>
                  </div>
                </button>
              </div>

              {/* Navigation Link */}
              <div className="text-center pt-4">
                <Link to="/login" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-dm text-sm transition-colors group">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Login
                </Link>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
