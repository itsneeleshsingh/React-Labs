import React from 'react'
import SongCard from './SongCard';

const Main = () => {
    const songs = [
  {
    id: 1,
    name: "Midnight Drive",
    singer: "Alex Morgan",
    album: "Neon Nights",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Lost in the City",
    singer: "Maya Carter",
    album: "After Hours",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ocean Eyes",
    singer: "Ethan Brooks",
    album: "Blue Horizon",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Electric Heart",
    singer: "Luna James",
    album: "Electric Dreams",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Falling Slowly",
    singer: "Noah Williams",
    album: "Golden Days",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Summer Rain",
    singer: "Sofia Reed",
    album: "Summer Stories",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Wildfire",
    singer: "Ryan Cooper",
    album: "Into the Wild",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=500&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Dancing Alone",
    singer: "Emma Stone",
    album: "Parallel Hearts",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Golden Hour",
    singer: "Daniel Scott",
    album: "Sunset Boulevard",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Dreamer",
    singer: "Olivia Lane",
    album: "Cloud Nine",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Broken Strings",
    singer: "Jack Wilson",
    album: "Acoustic Soul",
    image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Starlight",
    singer: "Chloe Martin",
    album: "Midnight Bloom",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Runaway",
    singer: "Leo Anderson",
    album: "Road to Nowhere",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=500&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Heartbeat",
    singer: "Nina Parker",
    album: "Love Frequency",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Endless Summer",
    singer: "James Taylor",
    album: "Coastal Dreams",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop"
  }
];

  return (
    <div>
        <div className='min-h-screen bg-gray-800 text-white px-5 py-8'>
            <div className='rounded-2xl border border-white/10 bg-[#171b22] px-5 py-6 shadow-2xl shadow-black/20'>
                <h2 className='mb-5 mt-2 text-3xl font-semibold text-slate-200'>Top Picks!</h2>
              <div className='flex flex-wrap gap-5'>
                    {songs.map((item)=>{
                  return <SongCard key={item.id} name={item.name} singer={item.singer} album={item.album} img={item.image} />
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main