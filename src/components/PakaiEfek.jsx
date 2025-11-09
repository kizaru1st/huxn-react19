import React, { useEffect, useState } from 'react'

const PakaiEfek = () => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
    console.log("call useEffect");
  })

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>Kurang</button>
      <button onClick={() => setCounter(counter + 1)}>Tambah</button>
      <p>Counter: {counter}</p>
    </div>
  )
}

export default PakaiEfek
