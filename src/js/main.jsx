import React from 'react';
import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import '../styles/index.css';


import SecondsCounter from './components/SecondsCounter';
import CounterBoom from './components/CounterBoom';


let counter = 0;
let counterMin = 0;
let counterHours = 0;
let intervalId = null;
let counterBoom = 10;
let boomIntervalId = null;
let isBoom = false;


const root = ReactDOM.createRoot(document.getElementById('root'));

const startClock = () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    counter++;

    if (counter === 60) {
      counterMin++;
      counter = 0;
    }
    if (counterMin === 60) {
      counterHours++;
      counterMin = 0;
    }

    renderApp();
  }, 1000);
};

const startBoom = () => {
  if (boomIntervalId) return;
  boomIntervalId = setInterval(() => {
    if (counterBoom > 0) {
      counterBoom--;
    } else {
      clearInterval(boomIntervalId);
      boomIntervalId = null;
      isBoom = true;
    }
    renderApp();
  }, 1000);
};


const pauseClock = () => {
  clearInterval(intervalId);
  intervalId = null;
  renderApp();
};

const resetClock = () => {
  pauseClock();
  counter = 0; counterMin = 0; counterHours = 0;
  renderApp();
};


const renderApp = () => {
  const boomMin = Math.floor(counterBoom / 60);
  const boomSeg = counterBoom % 60;
  const boomHor = Math.floor(boomMin / 60);
  root.render(
    <React.StrictMode>


      {/* crono normal */}
      <div className="container-fluid vh-100 d-flex align-items-center">
        <div className="row w-100">

          <div className="col-md-7 d-flex justify-content-center">
            <div className="main-timer-container">
              <h2 className="text-white mb-4">CRONOMETRO</h2>
              <SecondsCounter seconds={counter} minutes={counterMin} hours={counterHours} />
              <div className="mt-4">
                <button className="btn btn-success btn-lg mx-2" onClick={startClock}>START</button>
                <button className="btn btn-warning btn-lg mx-2" onClick={pauseClock}>PAUSE</button>
                <button className="btn btn-secondary btn-lg mx-2" onClick={resetClock}>RESET</button>
              </div>
            </div>
          </div>



          {/* crono bomba */}
          {isBoom && (
            <div className="boom-overlay">
              <p className="boom-text">💥¡BOOM!💥</p>
            </div>
          )}
          <div className="col-md-5 d-flex justify-content-center">
            <div className="main-timer-container border-danger">
              <h2 className="text-danger mb-4">BOMBA</h2>

              <CounterBoom seconds={boomSeg} minutes={boomMin} hours={boomHor} />

              <div className="mt-4">
                <button className="btn btn-danger btn-lg mx-2" onClick={startBoom}>
                  INICIAR DETONACIÓN
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </React.StrictMode>
  );
};

renderApp();