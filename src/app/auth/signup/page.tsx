"use client";
import React, { useState } from 'react';
import NavBar from '@/components/navbar';
import Link from 'next/link';

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
        email: value.includes('@') ? '' : 'Email phải chứa ký tự @'
      }));
    }

    if (name === 'password' || name === 'confirmPassword') {
      setErrors(prev => ({
        ...prev,
        password: formData.confirmPassword && value !== (name === 'password' ? formData.confirmPassword : formData.password)
          ? 'Mật khẩu không khớp'
          : ''
      }));
    }
  };

return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black relative">
    <NavBar />
    
    {/* Background stars */}
    <div className="fixed inset-0 -z-10">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: `0 0 6px 1px white`
          }}
        />
      ))}
    </div>

    {/* Sign up form */}
    <div className="flex items-start justify-center w-full mt-20">
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Đăng ký tài khoản</h2>
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
            <label className="block text-white text-sm font-medium mb-2">Ngày sinh</label>
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
            <label className="block text-white text-sm font-medium mb-2">Mật khẩu</label>
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
            <label className="block text-white text-sm font-medium mb-2">Xác nhận mật khẩu</label>
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
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Đăng ký
          </button>
          <div className="text-center">
            <Link 
              href="/auth/signin" 
              className="text-white/80 hover:text-white text-sm transition-colors"
            >
              Đã có tài khoản? Đăng nhập tại đây
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default Signup;