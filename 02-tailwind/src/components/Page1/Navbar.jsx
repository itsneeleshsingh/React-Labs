import { Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-950 text-white flex items-center justify-between px-15 h-15'>
        <h3 className='text-2xl font-bold font-mono'>Groovvy</h3>
        <div className="links">
            <ul className='flex gap-8 font-medium uppercase text-gray-300'>
                <li className='text-sm text-blue-400 font-semibold'>Music</li>
                <li className='text-sm hover:text-blue-400 transition-colors'>Podcast</li>
                <li className='text-sm hover:text-blue-400 transition-colors'>Live</li>
            </ul>   
        </div>
        <div className="flex gap-3 bg-gray-900 py-2 px-8 border-1 border-gray-700 rounded-lg">
            <Search/>
            <input type="text" className='border-none focus:outline-none' placeholder='Search any music!'/>
        </div>
        
        <div className="userSection">
            <div className='flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-sm'>
                <img className='w-6 rounded-sm' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNxmW_7BQnhgOV4YO7IJG3e3VgeEcLLLA_I55gg12zg&s=10" alt="" />
                <p className='text-md font-medium'>Dave Cooper</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar