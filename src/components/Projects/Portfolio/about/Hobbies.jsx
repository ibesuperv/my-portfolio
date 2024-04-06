import React from 'react'

function Hobbies() {
    const Hobbies = [
        "video games",
        "out door games",
        "learning somthing",
        "coding"
    ]
  return (
    <div>
        <span className='text-cyan-600'>const </span> Hobbies <span className="text-cyan-600">= </span><br/>
        &emsp;&emsp;&emsp;&emsp;<span>{"["}</span><br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-red-600'>"video games"</span> ,<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-red-600'>"learning somthing"</span> ,<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-red-600'>"playing outdoor games"</span> ,<br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='text-red-600'>"coding"</span> ,<br/>

        &emsp;&emsp;&emsp;&emsp;<span>{"]"}</span>
    </div>
  )
}

export default Hobbies