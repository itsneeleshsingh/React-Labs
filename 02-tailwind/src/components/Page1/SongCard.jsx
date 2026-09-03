import React from 'react'

const SongCard = (props) => {
  return (
    <article className='group w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-[#20242c] p-3 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#292e38] hover:shadow-black/25'>
        <img className='aspect-square w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.03]' src={props.img} alt={`${props.name} album cover`} />
        <div className='px-1 pt-4'>
          <h4 className='truncate text-lg font-bold text-white'>{props.name}</h4>
          <p className='mt-1 truncate text-sm text-slate-400'>{props.singer} <span className='text-slate-600'>•</span> {props.album}</p>
        </div>
    </article>
  )
}

export default SongCard