import { Search } from 'lucide-react'
import React, { useState } from 'react'

const TopBar = ({search,setSearch}) => {
    
  return (
    <div className='flex px-10 py-5 flex-col gap-5'>
        <div className='ml-1 lg:ml-10'>
            <div className='flex items-center text-gray-600'>
                <Search size={20}/>
                <input 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className='px-3 py-1 outline-none'
                    type="text" placeholder='Search Notes'
                />
            </div>
        </div>
        <div className='ml-1 lg:ml-8'>
            <h1 className='font-bold text-4xl lg:text-5xl'>Notes</h1>
        </div>
    </div>
  )
}

export default TopBar