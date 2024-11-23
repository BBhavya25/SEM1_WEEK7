import React from 'react';

const ColorList = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Color Palette</h2>
      <ul className="list-disc pl-5">
        {colors.map((color, index) => (
          <li 
            key={index} 
            style={{ color: color.toLowerCase() }}
            className="mb-1"
          >
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;