'use client'
import React, { useState } from 'react';
import login from '@/lib/login';
import { useRouter } from 'next/navigation';

export default function isForm  () {
  const [Username, setUsername] = useState<string>("")
  const [Password, setPassword] = useState<string>("")
  const router = useRouter();
  const handleSignIn = async()=> {
    try{
      const res = await login(Username,Password) ;
      router.push("/Home")
      
    }catch(err){
      return err
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-sm bg-gray-800 rounded-xl shadow-md p-8 text-gray-100 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4"onSubmit={e => { e.preventDefault(); handleSignIn(); }}>
          <div>
            <label htmlFor="username" className="block text-gray-400 text-sm mb-1">Username</label>
            <input
              id="username"
              type="text"
              className="w-full bg-gray-700 rounded-md border border-gray-600 p-3 focus:border-purple-400 outline-none"
              value={Username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-400 text-sm mb-1">Password</label>
            <input
              id="password"
              type="password"
              className="w-full bg-gray-700 rounded-md border border-gray-600 p-3 focus:border-purple-400 outline-none"
              value={Password}
              onChange={e => setPassword(e.target.value)}
            />
            <div className="text-right mt-2">
              <a href="#" className="text-xs text-gray-400 hover:text-purple-400">Forgot Password?</a>
            </div>
          </div>

          <button type="submit" onClick={handleSignIn} className="w-full bg-purple-500 text-gray-900 font-semibold py-2 rounded-md hover:bg-purple-600">
            Sign in
          </button>
        </form>

        <div className="flex items-center mt-6">
          <div className="flex-grow bg-gray-700 h-px"></div>
          <div className="flex-grow bg-gray-700 h-px"></div>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">Don't have an account? <a href="#" className="text-gray-100 hover:underline hover:text-purple-400">Sign up</a></p>
      </div>
    </div>
  );
};

