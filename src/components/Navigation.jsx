"use client"

import React from 'react'

import Link from 'next/link'

export const Navigation = ({data}) => {

    if (!data) {
        return (
                <nav className=' flex justify-between items-center h-10 bg-violet-500'>
                    <div className='ml-5'>
                        <Link href='/'>CRUD</Link>
                    </div>
                    <div className='space-x-5 mr-5'>
                        <Link href='/login'>Sign in</Link>
                        <Link href='/register'>Get Started</Link>
                    </div>
                </nav>
              )
    }

    return (
        <nav className=' flex justify-between items-center h-10 bg-violet-500'>
                    <div className='ml-5'>
                        <p>CRUD</p>
                    </div>
                    <div className='space-x-5 mr-5'>
                        <Link href='/dashboard'>Dashboard</Link>
                    </div>
                </nav>
    )
}
