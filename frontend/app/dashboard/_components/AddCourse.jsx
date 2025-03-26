"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AddCourse() {
    const {user} = useUser()
  return (
    <div className='flex item-center justify-between'>
      <div>
      <h2 className='text-3xl'>Hello, User
        <span className='font-bold'>{user?.fullName}</span>
      </h2>
      </div>
    <Link href={"/create-course"}>
      <Button>Create new course</Button>
    </Link>
    </div>
  )
}

export default AddCourse
