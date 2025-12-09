import React from "react";

export default function AdminInventory() {
  return (
    <div className="min-h-screen px-8 py-10 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#FF8FB7]">
            Inventory Management
          </h1>

          <button className="px-5 py-2 rounded-lg bg-[#FF8FB7] text-white shadow hover:opacity-90">
            + Add New Product
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by Product Name..."
            className="flex-1 px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FF8FB7]"
          />
          <select className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#FF8FB7]">
            <option>All Categories</option>
            <option>Medicines</option>
            <option>Supplements</option>
          </select>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FF8FB7] text-white">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((row) => (
                <tr key={row} className="border-b hover:bg-pink-50 transition">
                  <td className="px-6 py-4 font-medium">DATA FROM API</td>
                  <td className="px-6 py-4 text-gray-600">DATA FROM API</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">DATA FROM API</td>
                  <td className="px-6 py-4">₹ DATA FROM API</td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                      Edit
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
