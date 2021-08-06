import React, { useState, useEffect } from 'react';

function BedPage() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div >
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime+' Bed???'}.</p>
      </header>
    </div>
  );
}

export default BedPage;