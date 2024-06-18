import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import PokemonLogo from '/Users/eliwills/Desktop/Pursuit/MiniProjects/PokemonProject/Pokemon/src/Pictures/PokemonLogo.png'


export default function NavBar() {



  return (
    <nav className='navbar'>

      <ul className='item-links'>
        <Link to='/about'>
          <li>About</li>
        </Link>

        <Link to='/'>
          <li className='homepageLogo'> <img src={ PokemonLogo }/> </li> 
        </Link>

        <Link to='/trainer'>
          <li>Trainer</li>
        </Link>
      </ul>

    </nav>
  )
}
