import React, { useState } from 'react';

const App = () => {

  const [movie, setMovie] = useState([
    { id: 1,title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2,title: "The Matrix", director: "The Wachowskis", year: 1999 },
    { id: 3,title: "Interstellar", director: "Christopher Nolan", year: 2014 }
  ]);

  const handleClick = () => {
    setMovie(movie.map((m) => m.id === 1 ? { ...movie, title: "Inception (Updated)" } : m));
  }

  return <section>
    {movie.map((m) => {
      return <li key={m.title}> {m.title}</li>
    })}
    <button onClick={handleClick}>Add Movie</button>
  </section>
}

export default App;