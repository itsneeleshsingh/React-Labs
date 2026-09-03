import { Trash } from 'lucide-react'
import React from 'react'

const Card = ({note}) => {
  return (
    <div className={`w-80 h-80 ${note.color} p-5 rounded-2xl flex flex-col justify-between`}>
        <div>
            <p className='text-md font-semibold'>{note.text}</p>
        </div>
        <div className='flex items-center justify-between px-1'>
            <p className='font-extralight'>{note.date}</p>
            <button className='bg-black rounded-full text-white p-2'>
                <Trash size={15}/>
            </button>
        </div>
    </div>
  )
}

export default Card