import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-4 shadow-md'>
        <h1 className='text-2xl'>NeoCourse</h1>
      <Button>Get Started</Button>

    </div>
  )
}

export default Header
