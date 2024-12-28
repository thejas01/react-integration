'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = (e: HashChangeEvent) => {
      e.preventDefault()
      const hash = window.location.hash
      const element = hash ? document.querySelector(hash) : null
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleScroll)
    return () => window.removeEventListener('hashchange', handleScroll)
  }, [])

  const navItems = ['about', 'skills', 'projects', 'contact']

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-10">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">DevName</Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`} 
                  onClick={(e) => handleClick(e, `/#${item}`)}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`} 
                  onClick={(e) => handleClick(e, `/#${item}`)}
                  className="block py-2 hover:text-gray-300 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

