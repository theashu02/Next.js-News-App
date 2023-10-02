"use client";
import News from '@/app/components/News'
import React from 'react'

const page = ({params}) => {
    console.log(params);
  return (
    <div className='flex justify-center items-center'>
        <News topic={params.topic} />
    </div>
  )
}

export default page