import React from 'react'
type Movie = {
    name: string;
    id: string;
    url: string;
  };
  
type Props = {
    movies: Movie[];
  };
function MovieSlider({ movies }: Props) {
    return (
        <div>
            {
                movies.map(() => {
                    return(
                        <div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieSlider