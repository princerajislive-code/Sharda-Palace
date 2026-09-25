import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AdminLoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin, isAdminAuthenticated } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdminAuthenticated) {
      navigate('/admin');
    }
  }, [isAdminAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the administrative passcode.');
      return;
    }

    const success = loginAdmin(password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid passcode. Use "admin" or "sharda@2026".');
    }
  };

  const handleQuickDemo = () => {
    loginAdmin('admin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-[#2E7D5A] mb-6">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sharda Palace Website</span>
          </Link>

          <div className="w-14 h-14 rounded-2xl bg-white border border-[#D6B56C]/40 text-[#2E7D5A] flex items-center justify-center mx-auto shadow-xs mb-4">
            <Shield className="w-7 h-7" />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            SHARDA PALACE
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] font-sans text-stone-500 font-medium mt-1">
            Management Portal Login
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200/80 rounded-2xl sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 font-sans mb-1.5">
                  Administrative Passcode
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter admin passcode"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    className="block w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-stone-200 bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#2E7D5A]"
                  />
                </div>
                {error && (
                  <p className="mt-2 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-ui font-medium rounded-md text-white bg-[#1A1A1A] hover:bg-[#2E7D5A] transition-colors shadow-sm"
              >
                <span>Access Management Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Access Badge */}
            <div className="mt-6 pt-5 border-t border-stone-100 text-center">
              <span className="text-[11px] text-stone-500 block mb-2">
                Authorized access for Sharda Palace staff
              </span>
              <button
                type="button"
                onClick={handleQuickDemo}
                className="w-full py-2 px-3 text-xs font-ui font-medium text-stone-700 bg-[#FAFAF8] hover:bg-stone-100 border border-stone-200 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D5A]" />
                <span>One-Click Demo Access (`admin`)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
