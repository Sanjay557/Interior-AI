"use client"

import { UserDetailContext } from '@/app/_context/UserDetailContext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
    const {userDetail, setUserDetail} = useContext(UserDetailContext)
  return (
    <div className="p-5 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-4">
            <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
            <h2 className='font-bold text-lg'>Ai Room Design</h2>
        </div>

        <Button variant='ghost' className='rounded-full text-primary'>Buy More Credits</Button>
        <div className='flex items-center gap-7'>
            <div className='flex items-center gap-2 p-1 bg-slate-200 px-2 rounded-full'>
                <Image src={'/star.png'} alt='star' width={20} height={20} />
                <h2>{userDetail?.credits}</h2>
            </div>
            <UserButton />
        </div>
      
    </div>
  )
}

export default Header
