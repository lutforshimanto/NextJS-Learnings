"use client"
import React from 'react'

export default function page({params}:{
    params:{postid: string}
}) {

  return (
    <div>
        <h1 className='text-3xl'>Details page with the id: {params.postid}</h1>
    </div>
  )
}

