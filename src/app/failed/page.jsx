import React from 'react'

export default function Failure() {
  return (
    <div className="flex flex-col pt-10 items-center h-screen bg-gray-100">
    <div className="max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h2>
      <p className="text-gray-700">We're sorry, the payment could not be processed.</p>
      <p className="text-gray-700">Please try again later.</p>
    </div>
  </div>
  )
}