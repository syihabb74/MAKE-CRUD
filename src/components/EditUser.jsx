"use client"

import { userEdit } from '@/logic/put';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

export const EditUser =  () => {

  const [isValidImage, setIsValidImage] = useState(false)

  const [name, setName] = useState('');
  
  const [image, setImage] = useState('');

  const router = useRouter();

  async function handleApplyEdit () {
    
    const localStorageUser = JSON.parse(localStorage.getItem('user'))
    
    if ( !name  || !image ) {

      alert('Harap isi semuanya')

    } else {

      const {_id, age} = localStorageUser;
    
      await userEdit(_id, name, age, image);

      localStorage.clear()
    
      router.push('/login');

    }
    
  }

  useEffect(() => {

    setIsValidImage(image.includes('facebook.com'));

  }, [image]);
  
  return (
    
  <div  className="flex flex-col justify-center h-screen items-center">
  <h1 className='text-center mb-5 text-xl'>Edit Your Profile</h1>
  <div className='border-2 border-black p-5 rounded-lg'>
    <div className='p-1'>
      <p>Username:</p>
      <input
        type='text'
        placeholder='Input your username'
        className='p-1 border rounded-lg text-black'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className='p-1'>
      <p>Input your image link:</p>
      <input
        type='text'
        placeholder='Input your image link'
        className='p-1 border rounded-lg text-black'
        onChange={(e) => setImage(e.target.value)}
      />
      
    </div>
    <button
      className='mx-auto block bg-indigo-500 hover:bg-indigo-600 mt-5 p-1 w-20 rounded-lg text-white'
      onClick={handleApplyEdit}
    >
      Apply
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
