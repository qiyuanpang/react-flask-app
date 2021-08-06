import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div >
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime+' Home???'}.</p>
        <Link to={`${process.env.PUBLIC_URL}/bed`}>Go to Bed</Link>
      </header>
    </div>
  );
}

export default HomePage;