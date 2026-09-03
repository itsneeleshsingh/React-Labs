import React, { useState } from 'react'

const NotesForm = ({onClose,onSubmit}) => {
    const [noteText, setNoteText] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
        onSubmit(noteText);
        onClose();
        setNoteText('');
    };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4'>
        <div className='w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-7'>
            <div className='border-b border-slate-200 pb-4'>
                <p className='text-sm font-medium uppercase tracking-widest text-slate-500'>New note</p>
                <h2 className='mt-1 text-2xl font-bold text-slate-900 sm:text-3xl'>Add Note</h2>
            </div>
            <form className='flex flex-col gap-5 pt-5'>
                <div>
                    <label className='mb-2 block text-sm font-medium text-slate-700' htmlFor='note'>Your note</label>
                    <textarea value={noteText} onChange={(e)=>setNoteText(e.target.value)} id='note' className='min-h-40 w-full resize-none rounded-lg border border-slate-300 p-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10' rows={6} placeholder='Type your note...' />
                </div>
                <div className='flex flex-col-reverse gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:justify-end'>
                    <button onClick={onClose} type='button' className='rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50'>Cancel</button>
                    <button onClick={handleSubmit} type='submit' className='rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700'>Save note</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NotesForm