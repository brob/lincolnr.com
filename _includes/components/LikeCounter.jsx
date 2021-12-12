import React, { useEffect, useState } from 'react'

function LikeCounter({likeCount, id}) {
  const [count, setCount] = useState(likeCount)
  useEffect(() => {
    fetch('/.netlify/functions/getLikes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({image: id})
            })
            .then(res => res.json())
            .then(res => {
                setCount(res.count)
            })
                

  }, [])
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
      <p>This photo has {count} likes  
        <button style={{marginInline: "var(--size-1)"}} className="button" onClick={handleClick}>❤️ Add a like</button>
      </p>   
    </div>
  )
}

export default LikeCounter