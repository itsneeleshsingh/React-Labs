import { Plus } from 'lucide-react'
import React from 'react'

const Sidebar = ({onAddClick}) => {
  return (
    <div className=' sticky top-0 flex flex-col py-5 px-1 lg:px-3 border-r sm:w-24 md:w-1/12 shrink-0 border-gray-300 h-screen gap-5 items-center'>
        <h2 className='font-bold text-1xl lg:text-2xl'>Docket</h2>
        <button 
          onClick={onAddClick}
          className='bg-black mt-10 text-white p-1 rounded-full active:scale-110'>
          <Plus/>
        </button>
    </div>
  )
}

export default Sidebar