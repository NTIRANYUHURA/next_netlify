import React from 'react'
import Link from 'next/Link'
import Contact from './../pages/contact';

function Navbar() {
  return (
    <nav>
        <Link href = '/'><a>Home</a></Link>
        <Link href = '/gallery'><a>Gallerie</a></Link>
        <Link href = '/tarif'><a>Tarifs et Spécification</a></Link>
        <Link href = '/contact'><a>Contact</a></Link>

    </nav>
  )
}

export default Navbar
