import GlassCard from "../ui/GlassCard";

export default function InventoryTable() {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4">Inventory Items</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2">Item</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-3">DATA FROM API</td>
              <td>DATA FROM API</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-cyan-600/30 text-cyan-300">
                  DATA FROM API
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
