import React from 'react'
import Card from './Card'

const NotesView = ({userNotes}) => {
  return (
    <div className='px-5 flex gap-3 flex-wrap'>
        {userNotes.map((note)=>{
            return <Card key={note.date+note.text} note={note}/>
        })}
    </div>
  )
}

export default NotesView