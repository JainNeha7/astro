import React from 'react';

export default function Success() {
  return (
    <>
      <div className="flex flex-col pt-10 items-center h-screen bg-gray-100">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-green-600">Great, Payment Done!</h2>
        <p className="text-gray-700 text-center">Please explore our other products.</p>
      </div>
    </div>

      {/* <div className="flex flex-col items-center  min-h-screen bg-gray-100">
        <div className="max-w-lg bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Success!</h2>
          <p className="text-gray-700 text-center">Payment Done. Explore more products.</p>
        </div>
      </div> */}

    </>
  );
}
