"use client";
import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Link from 'next/link';
import StarsBg from '@/components/stars_bg';

const Signup = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: value.includes('@') ? '' : 'Email have to include @'
      }));
    }

    if (name === 'password' || name === 'confirmPassword') {
      setErrors(prev => ({
        ...prev,
        password: formData.confirmPassword && value !== (name === 'password' ? formData.confirmPassword : formData.password)
          ? 'Password do not match'
          : ''
      }));
    }
  };

return (
  <div className="min-h-screen flex flex-col items-center justify-center sm:p-8 md:p-16 lg:p-20 gap-8 sm:gap-12 md:gap-16 font-[family-name:var(--font-geist-sans)] relative">
    <NavBar />
    <StarsBg />

    {/* Sign up form */}
    <div className="flex items-start justify-center w-full mt-5">
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Register</h2>
            <form className="space-y-6">
          {/* ...các trường form như cũ... */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Nickname</label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Date Of Birth</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
              required
            />
            {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
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
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/5 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-colors"
              required
            />
            {errors.password && <p className="mt-1 text-red-400 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-white hover:bg-gray-300 text-black font-bold rounded-lg transition-colors"
          >
            Sign Up
          </button>
          <div className="text-center">
            <Link 
              href="/auth/signin" 
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Already have an account? Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Signup;