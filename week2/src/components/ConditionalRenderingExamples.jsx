import React, { useState } from 'react';

const ConditionalRenderingExamples = () => {
  // 6. Show/Hide Component
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // 7. Conditional Greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // 8. Login/Logout State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleAuthToggle = () => setIsLoggedIn(!isLoggedIn);

  // 9. Error Message Display
  const [hasError, setHasError] = useState(false);
  const simulateErrorState = () => setHasError(true);

  // 10. Multi-Condition Rendering
  const [status, setStatus] = useState('idle');
  const simulateStatusChange = () => {
    setStatus('processing');
    setTimeout(() => setStatus('success'), 2000);
    setTimeout(() => setStatus('error'), 3000);
  };

  return (
    <div className="p-4 space-y-6">
      {/* 6. Show/Hide Component */}
      <div>
        <h2 className="text-xl font-bold mb-2">6. Show/Hide Text</h2>
        <button 
          onClick={toggleVisibility} 
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        >
          {isVisible ? 'Hide' : 'Show'} Text
        </button>
        {isVisible && (
          <p className="bg-gray-100 p-2 rounded">
            This text appears and disappears when you click the button!
          </p>
        )}
      </div>

      {/* 7. Conditional Greeting */}
      <div>
        <h2 className="text-xl font-bold mb-2">7. Time-Based Greeting</h2>
        <p className="text-lg">
          {getTimeBasedGreeting()}, User!
        </p>
      </div>

      {/* 8. Login/Logout State */}
      <div>
        <h2 className="text-xl font-bold mb-2">8. Authentication State</h2>
        {isLoggedIn ? (
          <div>
            <p className="mb-2">Welcome, User!</p>
            <button 
              onClick={handleAuthToggle} 
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={handleAuthToggle} 
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        )}
      </div>

      {/* 9. Error Message Display */}
      <div>
        <h2 className="text-xl font-bold mb-2">9. Error Handling</h2>
        <button 
          onClick={simulateErrorState} 
          className="bg-yellow-500 text-white px-4 py-2 rounded mb-2"
        >
          Simulate Error
        </button>
        {hasError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            An error occurred. Please try again.
          </div>
        )}
      </div>

      {/* 10. Multi-Condition Rendering */}
      <div>
        <h2 className="text-xl font-bold mb-2">10. Status Rendering</h2>
        <button 
          onClick={simulateStatusChange} 
          className="bg-purple-500 text-white px-4 py-2 rounded mb-2"
        >
          Change Status
        </button>
        {status === 'processing' && (
          <div className="text-yellow-600">Processing...</div>
        )}
        {status === 'success' && (
          <div className="text-green-600">Operation Successful!</div>
        )}
        {status === 'error' && (
          <div className="text-red-600">Operation Failed!</div>
        )}
      </div>
    </div>
  );
};

export default ConditionalRenderingExamples;