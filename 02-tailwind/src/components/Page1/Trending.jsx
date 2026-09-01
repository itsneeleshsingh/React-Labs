import React from 'react'

const artists = [
  { name: 'Travis Scott', plays: '44M Plays', color: 'from-violet-500 to-indigo-500' },
  { name: 'Billie Eilish', plays: '203M Plays', color: 'from-amber-200 to-yellow-100' },
  { name: 'This Kid', plays: '63M Plays', color: 'from-cyan-500 to-sky-500' },
  { name: 'Kanye', plays: '15M Plays', color: 'from-slate-200 to-gray-400' },
  { name: 'Nicki Minaj', plays: '180M Plays', color: 'from-fuchsia-500 to-red-500' },
  { name: 'Starboy', plays: '100M Plays', color: 'from-slate-300 to-zinc-500' },
]

const genres = [
  { name: 'Dance Beat', color: 'bg-[#d3c5ae]' },
  { name: 'Electro Pop', color: 'bg-[#7e8ac2]' },
  { name: 'Alternative Indie', color: 'bg-[#a75f4f]' },
  { name: 'Hip Hop', color: 'bg-[#4c7b94]' },
  { name: 'Classical Period', color: 'bg-[#b09ec1]' },
  { name: 'Hip Hop', color: 'bg-[#8f93c7]' },
]

const Trending = () => {
  return (
    <div className='min-h-screen bg-[#0a0f18] px-4 py-6 text-white md:px-8 xl:px-12'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='relative overflow-hidden rounded-[30px] bg-[#0d131d] p-5 md:p-8 xl:p-10'>
          <div className='grid items-center gap-6 xl:grid-cols-[1.15fr_0.85fr]'>
            <div className='relative z-10'>
              <p className='mb-6 text-2xl font-bold'>Trending New Hits</p>

              <h1 className='text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl xl:text-[7rem]'>
                In My Feelings
              </h1>

              <div className='mt-4 flex items-center gap-4 text-xl text-white/80'>
                <span className='font-semibold text-white'>Camila Cabello</span>
                <span>63Million Plays</span>
              </div>

              <div className='mt-8 flex items-center gap-5'>
                <button className='rounded-full bg-[#4d74ff] px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-[#6a8cff]'>
                  Listen Now
                </button>

                <div className='flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/5'>
                  <span className='text-xl'>♡</span>
                </div>
              </div>

              <div className='mt-10 rounded-[28px] bg-[#2c313b]/90 p-4 shadow-2xl shadow-black/30'>
                <div className='mb-4 flex items-center justify-between'>
                  <h2 className='text-2xl font-bold'>Top Artists</h2>
                  <button className='text-sm text-white/70'>See all</button>
                </div>

                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6'>
                  {artists.map((artist, index) => (
                    <div key={index} className='rounded-2xl bg-[#3a3d49] p-2'>
                      <div className={`mb-3 h-20 rounded-xl bg-gradient-to-br ${artist.color}`} />
                      <p className='text-base font-semibold'>{artist.name}</p>
                      <p className='mt-1 text-sm text-white/60'>{artist.plays}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='relative z-10 mt-6 xl:mt-0'>
              <div className='relative h-[520px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0f18]'>
                <img
                  src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'
                  alt='Artist portrait'
                  className='h-full w-full scale-110 object-cover grayscale-[0.9] contrast-125'
                />
                <div className='absolute inset-0 bg-gradient-to-l from-[#05070b] via-[#05070b]/20 to-transparent' />
              </div>
            </div>
          </div>

          <div className='mt-8 grid gap-6 xl:grid-cols-[0.8fr_1.2fr_0.9fr]'>
            <div className='rounded-[26px] bg-[#2a2d35] p-5'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-2xl font-bold'>Genres</h3>
                <button className='text-sm text-white/70'>See all</button>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                {genres.map((genre, index) => (
                  <div key={index} className={`${genre.color} flex h-20 items-end rounded-2xl p-3`}>
                    <span className='text-lg font-semibold text-white'>{genre.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-[26px] bg-[#2a2d35] p-5'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-2xl font-bold'>Top Charts</h3>
                <button className='text-sm text-white/70'>See all</button>
              </div>

              <div className='space-y-4'>
                {[
                  ['01', 'Havana', 'Camila Cabello', '3:45'],
                  ['02', 'Jesus is King', 'Kanye West', '3:45'],
                  ['03', 'Closer', 'The Chainsmokers', '3:45'],
                  ['04', 'Lazer', 'Major Lazer ft DJ Snake', '3:45'],
                ].map(([number, title, artist, time]) => (
                  <div key={number} className='flex items-center gap-4 rounded-2xl bg-[#1d2128] p-3'>
                    <span className='w-8 text-sm text-white/60'>{number}</span>
                    <div className='h-12 w-12 rounded-lg bg-gradient-to-br from-[#f9d976] to-[#c05c52]' />
                    <div className='min-w-0 flex-1'>
                      <p className='truncate font-semibold'>{title}</p>
                      <p className='truncate text-sm text-white/60'>{artist}</p>
                    </div>
                    <span className='text-sm text-white/60'>{time}</span>
                    <div className='flex gap-2 text-lg text-white/70'>
                      <span>▶</span>
                      <span>⋯</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-[26px] bg-[#2a2d35] p-5'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-2xl font-bold'>Player</h3>
                <button className='text-xl text-white/80'>≣</button>
              </div>

              <div className='rounded-[22px] bg-gradient-to-br from-[#4d7cff] to-[#3b60db] p-3'>
                <img
                  src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
                  alt='Song cover'
                  className='h-52 w-full rounded-[18px] object-cover'
                />
              </div>

              <h4 className='mt-5 text-4xl font-bold'>Butterfly Effect</h4>
              <p className='mt-2 text-lg text-white/70'>Travis Scott</p>
              <p className='text-sm text-white/50'>Best of 2020</p>

              <div className='mt-6 flex items-center gap-3 text-sm text-white/60'>
                <span>2:45</span>
                <div className='h-1 flex-1 rounded-full bg-white/20'>
                  <div className='h-full w-1/2 rounded-full bg-white' />
                </div>
                <span>1:02</span>
              </div>

              <div className='mt-6 flex items-center justify-center gap-6'>
                <button className='text-2xl text-white/80'>⏮</button>
                <button className='flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-[#3b60db]'>▶</button>
                <button className='text-2xl text-white/80'>⏭</button>
                <button className='text-2xl text-white/80'>✕</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending