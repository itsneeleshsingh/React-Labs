import React from 'react'
import Card from './Card'

const NotesView = ({userNotes,onDelete}) => {
  return (
    <div className='px-5 flex gap-3 flex-wrap'>
        {userNotes.map((note,idx)=>{
            return <Card key={idx} note={note} onDelete={()=>onDelete(idx)}/>
        })}
    </div>
  )
}

export default NotesView