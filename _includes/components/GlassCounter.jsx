// _includes/components/GlassCounter.jsx
import React, { useState } from 'react'

function GlassCounter({likeCount, id}) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(likeCount)

  async function handleClick() {
    setCount(count + 1)

    fetch('/.netlify/functions/setLikes', {
          method: 'POST',
          body: JSON.stringify({
              image: id
              })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCount(res.count)
            })
}

  return (
    <div>
      <p>This photo has {count} likes ❤️ <button onClick={handleClick}>Add a like</button></p>   
    </div>
  )
}

export default GlassCounter