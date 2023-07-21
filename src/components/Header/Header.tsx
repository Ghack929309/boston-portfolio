'use client'
import Link from 'next/link'
import React from 'react'

const navigation = [
    { name: 'Home', href: '#', anchor: '' },
    { name: 'About', href: '#', anchor: '' },
    { name: 'Contact', href: '#', anchor: '' },
    { name: 'projects', href: '#', anchor: '' },
]

export const Header = () => {
    const [showMenuOpen, setShowMenuOpen] = React.useState<boolean>(false)
    return (
        <div className="navbar flex justify-between items-center ">
            <div className="">
                <Link href='/' className="btn btn-ghost normal-case text-xl">Boston</Link>

            </div>
            <ul className='hidden md:flex gap-x-6 justify-between items-center'>
                {
                    navigation.map((nav, index) => (
                        <li className='' key={nav.name}><a href={nav.href}>{nav.name}</a></li>
                    ))
                }
            </ul>
            <div className="flex-none">
                <button onClick={() => setShowMenuOpen(!showMenuOpen)} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>

    )
}

