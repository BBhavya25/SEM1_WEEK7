import React from 'react';

const GroceryList = () => {
  const groceryItems = ['Apples', 'Bread', 'Milk', 'Eggs', 'Cheese'];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Grocery Shopping List</h2>
      <ul className="list-disc pl-5">
        {groceryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;