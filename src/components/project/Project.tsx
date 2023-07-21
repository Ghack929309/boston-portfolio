'use client'
import React from 'react'
import Card from '../card/Card'
import { useAppContext } from '@/context/AppContext'

export const Project = () => {
  const { dataItems } = useAppContext()
  console.log('project', dataItems)
  return (
    <>
      <p className='text-zinc-800 text-opacity-90 text-base font-normal capitalize'>Projects</p>
      {
        dataItems?.map((item, idx: number) => {
          const { title, subTitle, image } = item.data
          return (
            <div key={item._id} className='flex flex-col items-center justifify-center gay-y-4'>
              <Card id={idx} image={image} title={title} subTitle={subTitle} />
            </div>
          )
        })}
    </>
  )
}
function ContextWrapper(): { selector: any } {
  throw new Error('Function not implemented.')
}

