import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente SecondsCounter
  
const SecondsCounter = (props) => {
  const counterStr = props.seconds.toString().padStart(6,'0');
    return (
      <div className="bg-black">
      <div  id="counter" className='justify-content-center' style={{ display: 'flex'}}>
        <div className='card m-3 text-center justify-content-around bg-secondary text-white bg-opacity-10 border-secondary border-3 rounded-4 ' style={{width: '9vw', height:'18vh'}}><h1><i className="fa-regular fa-clock"></i></h1></div>
    {counterStr.split('').map((digit, index) => (
      <div key={index} className="card  m-3 d-flex text-center justify-content-around bg-secondary text-white bg-opacity-10 border-secondary border-3 rounded-4 " style={{width: '9vw', height:'18vh'}}><h1>
        {digit}
        </h1>
      </div>
    ))}
  </div>
  </div>
    )
  }
  
  let counter = 0; 
  
  setInterval(()=> {
    ReactDOM.createRoot(document.getElementById('app')).render(
      <React.StrictMode>
        <SecondsCounter seconds={counter}/>
      </React.StrictMode>,
    )
    counter = counter + 1;
  }, 1000);
export default SecondsCounter;