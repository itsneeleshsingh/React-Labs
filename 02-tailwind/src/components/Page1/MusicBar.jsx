import { CirclePlus, ListMusic, Maximize2, Mic2, MonitorSpeaker, Pause, PictureInPicture2, Play, StepBack, StepForward, Volume2 } from 'lucide-react'
import React, { useState } from 'react'

const MusicBar = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(70)

  return (
    <div>
        <div className='fixed bottom-0 bg-gray-900 z-20 text-white fixed bottom-0 w-full flex justify-between py-3 px-5 gap-3 items-center'>
          <div className='flex items-center gap-3'>
            <img className="w-10 h-10 rounded-1xl" src="https://template.canva.com/EAGnmDwaNpA/1/0/800w-KKOAYz5esa4.jpg" alt="" />
            <div>
              <p className='font-bold'>Jab Se Naina</p>
              <p className='text-sm'>Shaan</p>
            </div>
          <div className='text-gray-400 font-light ml-5'><CirclePlus className='size-5'/></div>
          </div>

          <div className='text-white flex flex-col items-center'>
            <div className='flex gap-2 text-slate-400 items-center'>
              <StepBack/>
              <button className='bg-white rounded-full p-1 text-black' type='button' aria-label={isPlaying ? 'Pause' : 'Play'} onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause size={20}/> : <Play size={20}/>}
              </button>
              <StepForward/>
            </div>
            <div className='flex gap-1 items-center'>
              <p>4:33</p>
              <div className='bg-gray-500 w-80 h-2 rounded-2xl'></div>
              <p>4:26</p>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-4 text-gray-300'>
            <button type='button' aria-label='Open lyrics' title='Lyrics' className='hover:text-white transition-colors'>
              <Mic2 className='size-5'/>
            </button>
            <button type='button' aria-label='Open queue' title='Queue' className='hover:text-white transition-colors'>
              <ListMusic className='size-5'/>
            </button>
            <button type='button' aria-label='Connect to a device' title='Connect to device' className='hover:text-white transition-colors'>
              <MonitorSpeaker className='size-5'/>
            </button>
            <div className='flex items-center gap-2'>
              <Volume2 className='size-5'/>
              <input
                aria-label='Volume'
                type='range'
                min='0'
                max='100'
                value={volume}
                onChange={(event) => setVolume(event.target.value)}
                className='w-24 accent-green-500 cursor-pointer'
              />
            </div>
            <button type='button' aria-label='Open mini player' title='Mini player' className='hover:text-white transition-colors'>
              <PictureInPicture2 className='size-5'/>
            </button>
            <button type='button' aria-label='Enter fullscreen' title='Fullscreen' className='hover:text-white transition-colors'>
              <Maximize2 className='size-5'/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default MusicBar