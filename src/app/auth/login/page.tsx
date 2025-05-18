"use client";
import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import StarsBg from '@/components/stars_bg';

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'usernameOrEmail') {
      setErrors(prev => ({
        ...prev,
        usernameOrEmail: value.includes('@') ? 
          (value.includes('@') && !value.includes('.') ? 'Invalid email format' : '') 
          : ''
      }));
    }

    // Thêm validation cho password
    if (name === 'password') {
      setErrors(prev => ({
        ...prev,
        password: value.length < 8 ? 'Password must be at least 8 characters' : ''
      }));
    }
  };

  // Kiểm tra form có hợp lệ không
  const isFormValid = () => {
    return (
      formData.usernameOrEmail.length > 0 &&
      formData.password.length >= 8 &&
      !errors.usernameOrEmail &&
      !errors.password
    );
  };

  // Xử lý submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      // Xử lý logic đăng nhập ở đây
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center sm:p-8 md:p-16 lg:p-20 gap-8 sm:gap-12 md:gap-16 font-[family-name:var(--font-geist-sans)] relative">
      <NavBar />
      <StarsBg />

      <div className="flex items-start justify-center w-full mt-5">
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Welcome Back!</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Nickname or Email
              </label>
              <input
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                placeholder="Enter your nickname or email"
                className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
                required
              />
              {errors.usernameOrEmail && (
                <p className="mt-1 text-red-400 text-sm">{errors.usernameOrEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
                required
              />
              {errors.password && (
                <p className="mt-1 text-red-400 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full py-3 px-4 font-bold rounded-lg transition-colors ${
                isFormValid()
                  ? 'bg-white hover:bg-gray-300 text-black'
                  : 'bg-gray-500 cursor-not-allowed text-gray-300'
              }`}
            >
              Sign In
            </button>

            <div className="text-center">
              <Link 
                href="/auth/signup" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;