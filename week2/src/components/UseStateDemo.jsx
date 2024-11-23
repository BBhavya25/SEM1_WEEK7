import React, { useState } from 'react';

function UseStateDemo() {
  // Task 16: Counter Application
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);

  // Task 17: Toggle Visibility
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Task 18: Input State
  const [inputText, setInputText] = useState('');
  const handleInputChange = (e) => setInputText(e.target.value);

  // Task 19: Form Handling
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Task 20: Dynamic Theme Toggler
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div style={{ 
      fontFamily: 'Arial', 
      padding: '20px', 
      backgroundColor: isDarkTheme ? '#333' : '#fff',
      color: isDarkTheme ? '#fff' : '#000',
      transition: 'all 0.3s ease'
    }}>
      <h1>React useState Demonstrations</h1>

      {/* Task 16: Counter */}
      <div style={{ margin: '10px 0' }}>
        <h3>Task 16: Counter</h3>
        <p>Count: {counter}</p>
        <button 
          onClick={handleIncrement}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          Increment
        </button>
        <button 
          onClick={handleDecrement}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          Decrement
        </button>
      </div>

      {/* Task 17: Toggle Visibility */}
      <div style={{ margin: '10px 0' }}>
        <h3>Task 17: Toggle Visibility</h3>
        <button 
          onClick={toggleVisibility}
          style={{ margin: '0 5px', padding: '5px 10px' }}
        >
          {isVisible ? 'Hide' : 'Show'} Content
        </button>
        {isVisible && (
          <p>This content can be toggled on and off!</p>
        )}
      </div>

      {/* Task 18: Input State */}
      <div style={{ margin: '10px 0' }}>
        <h3>Task 18: Input State</h3>
        <input 
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type something"
          style={{ padding: '5px', width: '200px' }}
        />
        <p>You typed: {inputText}</p>
      </div>

      {/* Task 19: Form Handling */}
      <div style={{ margin: '10px 0' }}>
        <h3>Task 19: Form Handling</h3>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormInputChange}
            placeholder="Name"
            style={{ margin: '5px 0', padding: '5px' }}
          />
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormInputChange}
            placeholder="Email"
            style={{ margin: '5px 0', padding: '5px' }}
          />
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormInputChange}
            placeholder="Password"
            style={{ margin: '5px 0', padding: '5px' }}
          />
        </form>
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {'*'.repeat(formData.password.length)}</p>
        </div>
      </div>

      {/* Task 20: Dynamic Theme Toggler */}
      <div style={{ margin: '10px 0' }}>
        <h3>Task 20: Dynamic Theme Toggler</h3>
        <button 
          onClick={toggleTheme}
          style={{ 
            padding: '10px', 
            backgroundColor: isDarkTheme ? '#fff' : '#000',
            color: isDarkTheme ? '#000' : '#fff'
          }}
        >
          {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>
    </div>
  );
}

export default UseStateDemo;