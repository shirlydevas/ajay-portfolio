import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center text-white w-full'>
        <h1 className='text-2xl font-bold'><a href="/" title='Portfolio'>PORTFOLIO</a></h1>
        <nav className='w-[30%]'>
          <ul className='flex justify-between items-center'>
            <li>
              <a href="#about" className=''>About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
