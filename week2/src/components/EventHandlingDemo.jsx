import React, { useState } from 'react';

function EventHandlingDemo() {
  // State for various components
  const [inputValue, setInputValue] = useState('');
  const [hoverColor, setHoverColor] = useState('white');
  const [activeAction, setActiveAction] = useState('');

  // 11. Click Event
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  // 12. Mouse Hover Event
  const handleMouseEnter = () => {
    setHoverColor('lightblue');
  };

  const handleMouseLeave = () => {
    setHoverColor('white');
  };

  // 13. Form Input Handling
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 14. Submit Form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    console.log('Form Data:', formEntries);
  };

  // 15. Dynamic Button Actions
  const handleDynamicAction = (action) => {
    setActiveAction(action);
    switch(action) {
      case 'Add':
        console.log('Adding new item');
        break;
      case 'Edit':
        console.log('Editing existing item');
        break;
      case 'Delete':
        console.log('Deleting item');
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Event Handling Demonstrations</h2>

      {/* 11. Click Event */}
      <div style={{ margin: '10px 0' }}>
        <h3>Click Event</h3>
        <button 
          onClick={handleButtonClick}
          style={{ padding: '10px', backgroundColor: 'green', color: 'white' }}
        >
          Click Me
        </button>
      </div>

      {/* 12. Mouse Hover Event */}
      <div 
        style={{ 
          width: '200px', 
          height: '100px', 
          backgroundColor: hoverColor,
          border: '2px solid black',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          margin: '10px 0'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>

      {/* 13. Form Input Handling */}
      <div style={{ margin: '10px 0' }}>
        <h3>Real-time Input</h3>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something"
          style={{ padding: '5px', width: '200px' }}
        />
        <p>You typed: {inputValue}</p>
      </div>

      {/* 14. Submit Form */}
      <form 
        onSubmit={handleFormSubmit}
        style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}
      >
        <h3>Form Submission</h3>
        <input 
          type="text" 
          name="username" 
          placeholder="Username"
          style={{ padding: '5px', margin: '5px 0' }}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          style={{ padding: '5px', margin: '5px 0' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}
        >
          Submit
        </button>
      </form>

      {/* 15. Dynamic Button Actions */}
      <div style={{ margin: '10px 0' }}>
        <h3>Dynamic Button Actions</h3>
        {['Add', 'Edit', 'Delete'].map((action) => (
          <button
            key={action}
            onClick={() => handleDynamicAction(action)}
            style={{ 
              margin: '0 5px', 
              padding: '10px', 
              backgroundColor: activeAction === action ? 'lightgreen' : 'white' 
            }}
          >
            {action}
          </button>
        ))}
        {activeAction && <p>Last Action: {activeAction}</p>}
      </div>
    </div>
  );
}

export default EventHandlingDemo;