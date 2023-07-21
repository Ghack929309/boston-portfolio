'uae client'
import Link from 'next/link'
import { media } from '@wix/api-client'
import Image from 'next/image'
import React from 'react'

type CardProps = {
    image: string
    title: string
    subTitle: string
    id: number
}
export default function Card({ image, title, subTitle, id }: CardProps) {
    const imageMedia = media.getImageUrl(image)
    return (
        <div className='flex flex-col bg-white items-center justify-center gap-y-2 rounded-2xl py-4 px-6'>
            <div className='max-h-[20rem] overflow-hidden rounded-2xl'>
                <Image className='object-corver h-auto w-full '
                    quality={100}
                    priority
                    src={imageMedia.url}
                    alt={title}
                    width={imageMedia.width}
                    height={imageMedia.height}
                />

            </div>
            <div className='flex flex-col gap-y-2 items-center justify-center '>
                <p className='text-base capitalize opacity-80 font-medium text-zinc-800 '>{title}</p>
                <p className=" text-zinc-800 text-opacity-70 text-sm font-normal">{subTitle}</p>
                <Link prefetch href={`/project/${id}`}
                >
                    <button className='text-indigo-500 hover:opacity-60 text-sm font-normal capitalize'>see Project</button>
                </Link>
            </div>

        </div>
    )
}
