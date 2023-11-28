"use client"

import React from 'react';

import { useState } from 'react';

import { handleLogin } from '@/logic/login';

import { useRouter } from 'next/navigation';

export const Login = () => {
  
  const [name, setName] = useState(null);
  
  const router = useRouter();

  async function handleClickLogin () {
  
    const user = await handleLogin(name);
    
  
    if ( !user ) {
  
      alert(`You're Not Registered`)
  
      return;
  
    }

    localStorage.setItem('user', JSON.stringify( user ));
  
    router.push('/dashboard');

  }
  
  return (
    <div className='flex flex-col justify-center h-screen items-center'>
        <h1 className='text-center mb-5 text-xl text-white'>Login</h1>
        <div className='border-2 border-black p-5 rounded-lg text-black'>
          <div className='p-1'>
            <p>Name :</p>
            <input
              type='text'
              placeholder='Input your name'
              className='p-1 border rounded-lg'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button
            className='mx-auto block bg-indigo-500 hover:bg-indigo-600 mt-5 p-1 w-20 rounded-lg text-white'
            onClick={() => handleClickLogin()}
          >
            Login
          </button>
        </div>
      </div>
  )
}
