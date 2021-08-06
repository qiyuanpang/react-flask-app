import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BedPage() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  console.log(process.env)
  return (
    <div >
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime+' Bed??????'}.</p>
        <Link to={`${process.env.REACT_APP_PUBLIC_URL}`}>Go to Home</Link>
      </header>
    </div>
  );
}

export default BedPage;