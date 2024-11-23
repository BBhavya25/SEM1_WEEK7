import React from 'react';

const UserCards = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', profilePic: '', role: 'Developer' }, // No profilePic
    { id: 2, name: 'Bob Smith', profilePic: '', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', profilePic: '', role: 'Manager' }, // No profilePic
  ];

  const defaultProfilePic = "https://via.placeholder.com/100?text=Profile"; // Default image URL

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Team Members</h2>
      <div className="flex justify-center space-x-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white border rounded-lg p-6 text-center shadow-md w-64 hover:shadow-lg transition-shadow"
          >
            <img
              src={user.profilePic || defaultProfilePic} // Use default if profilePic is empty
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-gray-600">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
