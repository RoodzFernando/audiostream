import Link from 'next/link'
import React from 'react'
import { GiSoundWaves } from "react-icons/gi";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href='/'>
            <div className="flex">
              <GiSoundWaves size={40} color='red' />
              <h4 className="text-lg text-indigo-800 font-extrabold ml-2 self-center">AudioStream</h4>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}
