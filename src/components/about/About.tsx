'use client'
import React from 'react'

export const About = ({ title, description }: { title: string, description: string }) => {

    return (
        <div className='text-center p-4 flex flex-col gap-y-4'>
            <p className='capitalize font-medium text-lg'>{title}</p>
            <p className='max-w-lg mx-auto'>{description}</p>
        </div>
    )
}
