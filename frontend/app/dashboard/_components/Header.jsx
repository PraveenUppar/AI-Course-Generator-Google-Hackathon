import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-2 '>
        <h1></h1>
      <UserButton></UserButton>
    </div>
  )
}

export default Header
