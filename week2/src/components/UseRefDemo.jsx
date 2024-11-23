import React, { useState, useRef, useEffect } from 'react';
import './UseRefStyles.css';

function UseRefDemo() {
  // Task 21: Access DOM Element
  const inputRef = useRef(null);
  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  // Task 22: Track Previous State
  const [counter, setCounter] = useState(0);
  const prevCounterRef = useRef();
  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);
  const prevCounter = prevCounterRef.current;

  // Task 23: Stopwatch
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Task 24: Uncontrolled Component
  const uncontrolledInputRef = useRef(null);
  const handleSubmitUncontrolled = () => {
    console.log('Uncontrolled Input Value:', uncontrolledInputRef.current.value);
  };

  // Task 25: Scroll to Element
  const scrollSectionRef = useRef(null);
  const handleScrollToSection = () => {
    scrollSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="useref-container">
      <h1>React useRef Demonstrations</h1>

      {/* Task 21: Access DOM Element */}
      <div className="useref-section">
        <h3>Task 21: Input Focus</h3>
        <input 
          ref={inputRef}
          type="text"
          placeholder="Click button to focus"
          className="input-focus"
        />
        <button 
          onClick={handleFocusInput}
          className="focus-button"
        >
          Focus Input
        </button>
      </div>

      {/* Task 22: Track Previous State */}
      <div className="useref-section">
        <h3>Task 22: Previous State Tracking</h3>
        <p>Current Counter: {counter}</p>
        <p>Previous Counter: {prevCounter}</p>
        <button 
          onClick={() => setCounter(counter + 1)}
          className="counter-button"
        >
          Increment
        </button>
      </div>

      {/* Task 23: Stopwatch */}
      <div className="useref-section">
        <h3>Task 23: Stopwatch</h3>
        <p>Time: {time} seconds</p>
        <div className="stopwatch-buttons">
          <button onClick={startStopwatch}>
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button onClick={resetStopwatch}>
            Reset
          </button>
        </div>
      </div>

      {/* Task 24: Uncontrolled Component */}
      <div className="useref-section">
        <h3>Task 24: Uncontrolled Input</h3>
        <input 
          ref={uncontrolledInputRef}
          type="text"
          placeholder="Uncontrolled input"
          className="uncontrolled-input"
        />
        <button 
          onClick={handleSubmitUncontrolled}
          className="submit-button"
        >
          Get Value
        </button>
      </div>

      {/* Task 25: Scroll to Element */}
      <div className="useref-section">
        <button 
          onClick={handleScrollToSection}
          className="scroll-button"
        >
          Scroll to Section
        </button>

        <div className="scroll-placeholder">
          Scroll down...
        </div>

        <div 
          ref={scrollSectionRef}
          className="scroll-target"
        >
          <h3>Scrolled Section</h3>
          <p>You've reached the scroll target!</p>
        </div>
      </div>
    </div>
  );
}

export default UseRefDemo;