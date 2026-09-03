import React from 'react'
import Card from './Card'

const NotesView = ({userNotes,onDelete,search}) => {

  const filteredNotes = userNotes.filter((note)=>{
    return note.text.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className='px-5 flex gap-3 flex-wrap'>
      {userNotes.length === 0 ? (
        <p className='w-full py-5 px-15 text-center text-lg font-medium text-slate-500'>
          No notes yet.
        </p>
      ) : (
        filteredNotes.map((note, idx) => {
          return (
            <Card
              key={idx}
              note={note}
              onDelete={() => onDelete(idx)}
            />
          );
        })
      )}
    </div>
  )
}

export default NotesView