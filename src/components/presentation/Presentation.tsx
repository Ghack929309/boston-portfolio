import React from 'react'
import { portfolioData } from '../../../utils/constant'

export const Presentation = ({ name, title, description }: {
  name: string
  title: string
  description: string
}) => {
  return (
    <div className='flex flex-col gap-y-4 items-center px-4 '>
      <h1 className='font-semibold text-2xl capitalize'>{name}</h1>
      <h2 className='font-medium text-xl capitalize max-w-xs text-center'>{title}</h2>
      <p className='font-normal text-base max-w-sm text-center'>{description}</p>
      <div className='flex justify-between gap-x-12 mt-4'>
        <button className="btn btn-primary capitalize">my resume</button>
        <button className="btn btn-accent">hire me</button>
      </div>
    </div>
  )
}

