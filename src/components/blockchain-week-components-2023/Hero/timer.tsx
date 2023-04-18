import React, { useState, useEffect, CSSProperties } from 'react';

interface CountdownStyle extends CSSProperties {
  '--value': number;
}

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [eventTime, setEventTime] = useState(false);

  useEffect(() => {
      const target = new Date('04/10/2023 15:59:59');

      const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setEventTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
      {eventTime ? (
        <h2 className='mt-5 flex-row text-center font-black text-gray-800 text-3xl text-transparent
        bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 ease-in hover:from-yellow-500 hover:to-pink-500
        transition cursor-default '>
          The event has ended!
        </h2>
      ) : (
        <div className='flex justify-center pt-6 '>
          
          <div className='grid grid-flow-col gap-2 text-center auto-cols-max'>
            <div className='flex flex-col p-3 bg-white rounded-box text-gray-800'>
              <span className='countdown font-mono text-2xl md:text-4xl xl:text-6xl lg:text-5xl text-gray-800' style={{ '--value': days } as CountdownStyle}>
                <span></span>
              </span>
              days
            </div>
            <div className='flex flex-col p-3 bg-white rounded-box text-gray-800'>
              <span className='countdown font-mono text-2xl md:text-4xl xl:text-6xl lg:text-5xl text-gray-800' style={{ '--value': hours } as CountdownStyle}>
                <span></span>
              </span>
              hours
            </div>
            <div className='flex flex-col p-3 bg-white rounded-box text-gray-800'>
              <span className='countdown font-mono text-2xl md:text-4xl xl:text-6xl lg:text-5xl text-gray-800' style={{ '--value': minutes } as CountdownStyle}>
                <span></span>
              </span>
              min
            </div>
            <div className='flex flex-col p-3 bg-white rounded-box text-gray-800'>
              <span className='countdown font-mono text-2xl md:text-4xl xl:text-6xl lg:text-5xl text-gray-800' style={{ '--value': seconds } as CountdownStyle}>
                <span></span>
              </span>
              sec
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
