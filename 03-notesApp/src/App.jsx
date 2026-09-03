import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import TopBar from './Components/TopBar'
import NotesView from './Components/NotesView'
import NotesForm from './Components/NotesForm'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userNotes, setUserNotes] = useState([]);

  const colors = ['bg-amber-400', 'bg-blue-400', 'bg-green-400', 'bg-pink-400']

  const submitNote = (text)=>{
    const note={
      text,
      date: new Date().toLocaleDateString(),
      color:colors[Math.floor(Math.random()*colors.length)],
    }
    let currNotes = [...userNotes];
    currNotes.push(note);
    setUserNotes(currNotes);
  };

  return (
    <div className='flex min-h-screen'>
      <Sidebar onAddClick={()=>setIsFormOpen(true)}/>
      <main className='flex min-w-0 flex-1 flex-col gap-4'>
        <TopBar/>
        <div className="flex justify-center px-4 text-center sm:justify-start sm:px-0 sm:text-left">
          <NotesView userNotes={userNotes}/>
        </div>
      </main>

      {/* Form */}
      {isFormOpen && (
        <NotesForm onClose={()=>setIsFormOpen(false)} onSubmit={submitNote}/>
      )}
    </div>
  )
}

export default App