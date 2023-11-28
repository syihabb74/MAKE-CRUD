import Image from 'next/image';

import { Home } from '@/components/Home';
import { Menu } from '@/components/Menu';

export default function Page() {
  return (
    
    <Home>
      <nav className='flex flex-col h-screen justify-center items-center'>
      <div className='text-center mb-10'>
        <h1 className='text-4xl'>Home</h1>
      </div>
      <Menu/>
      </nav>
    </Home>
  )
}
