import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="home">
    Your <marquee behavior="scroll" direction="up"scrollamount="5"> Home<br></br><br></br>
    Office<br></br><br></br>Event Space</marquee> away from home.
    <br></br>
    </div>
  )
}

export default Home