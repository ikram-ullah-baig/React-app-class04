import React, { useState } from 'react';
import './Room.css';

function Room() {
    const [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark";
    const [temp, setTemp] = useState(22)
    

    return (
    <div className={`room ${brightness} center`}>
      <div>
        <h3>The room is <b>{isLit ? 'Lit' : 'Dark'}</b></h3>
        <br />
        <button onClick={() => setLit(!isLit)}>
          Flip
        </button>
      </div>
      <div>
        <button onClick={() => setLit(isLit ? isLit:!isLit)}>
          ON
        </button>
        <button onClick={() => setLit(isLit ? !isLit:isLit)}>
            OFF
        </button>
      </div>
      <div>
        <h3>The Room Temperature is: <quote><b>{temp}</b><sup>o</sup>C</quote></h3>
        <button onClick={() => setTemp(temp + 1)}>
            +    
        </button>
        <button onClick={() => setTemp(temp - 1)}>
            -    
        </button>    

      </div>
    </div>
    );
  }

export default Room;