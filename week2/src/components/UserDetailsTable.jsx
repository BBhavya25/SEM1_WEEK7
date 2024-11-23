import React from 'react';

const UserDetailsTable = () => {
  const userDetails = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', department: 'Engineering' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', department: 'Design' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', department: 'Product' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <table className="w-full border-collapse" border={1}>
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Department</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetailsTable;