import React from "react";

export default function AdminOrderHistory() {
  return (
    <div className="min-h-screen px-8 py-10 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#FF8FB7]">
            Order History
          </h1>
          <p className="text-gray-500 mt-1">
            View all completed and past orders
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by Order ID / Buyer Name..."
            className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FF8FB7]"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#FF8FB7] text-white">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Buyer Name</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Details</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b hover:bg-pink-50 transition">
                  <td className="px-6 py-4 font-medium">DATA FROM API</td>
                  <td className="px-6 py-4">DATA FROM API</td>
                  <td className="px-6 py-4 text-gray-600">DATA FROM API</td>
                  <td className="px-6 py-2">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">
                      DATA FROM API
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 rounded-lg bg-[#FF8FB7] text-white hover:opacity-90">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
