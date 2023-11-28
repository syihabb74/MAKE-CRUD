"use client"

import { useState, useEffect } from 'react';

import { handleRegister } from '@/logic/register';

import { useRouter } from 'next/navigation';

export const Register =  () => {

  const router = useRouter();

  const [isValidImage, setIsValidImage] = useState(false)
  
  const [name, setName] = useState('');
  
  const [age, setAge] = useState(0);
  
  const [image, setImage] = useState('');

  async function handleRegisterClick() {


    if (!name || age || image) {

      alert('Harap isi seluruh form');
      
    } else {
      
      handleRegister(name, age, image);
  
      router.push('/login');

    }
    
  

  }

  useEffect(() => {

    setIsValidImage(image.includes('facebook.com'));

  }, [image]);
  
  return (
    <div className='flex flex-col justify-center h-screen items-centern'>
      <h1 className='text-center mb-5 text-xl text-white'>Register Form</h1>
      <div className='flex flex-col items-center border-2 border-black p-5 rounded-lg'>
        <div className='p-1'>
          <p>Username :</p>
          <input
            type='text'
            placeholder='Input your username'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='p-1'>
          <p>Age</p>
          <input
            type='text'
            placeholder='Input your age'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className='p-1'>
          <p>Input your image link</p>
          <input
            type='text'
            placeholder='Input your image link'
            className='p-1 border rounded-lg text-black'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button
          className='mx-auto block bg-indigo-500 hover:bg-indigo-600 mt-5 p-1 w-20 rounded-lg text-white'
          onClick={() => {handleRegisterClick()}}
        >
          Register
        </button>
      </div>
      {image && (
        <div className='text-center'>
          {!isValidImage ? (
            <p>Allowed source image only from facebook.com</p>
          ) : (
            <p>Whitelisted</p>
          )}
        </div>
      )}
    </div>
  )
}
