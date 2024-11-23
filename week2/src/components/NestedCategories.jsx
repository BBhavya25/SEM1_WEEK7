import React from 'react';

const NestedCategories = () => {
  const productCategories = [
    { 
      id: 1, 
      name: 'Fruits', 
      items: [
        { id: 'f1', name: 'Apple', variant: 'Red Delicious' },
        { id: 'f2', name: 'Banana', variant: 'Cavendish' },
        { id: 'f3', name: 'Orange', variant: 'Navel' }
      ] 
    },
    { 
      id: 2, 
      name: 'Vegetables', 
      items: [
        { id: 'v1', name: 'Carrot', variant: 'Imperator' },
        { id: 'v2', name: 'Broccoli', variant: 'Calabrese' },
        { id: 'v3', name: 'Spinach', variant: 'Savoy' }
      ] 
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product Catalog</h2>
      {productCategories.map((category) => (
        <div key={category.id} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
          <ul className="pl-5 list-disc">
            {category.items.map((item) => (
              <li key={item.id} className="mb-1">
                {item.name} ({item.variant})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NestedCategories;