import React from 'react'

async function MovieId(
    {
        params
    } : {
        params: Promise<{movieId: string}>
    }
) {
    const movieId = (await params).movieId;
  return (
    <div className='text-white'>movie {movieId}</div>
  )
}

export default MovieId