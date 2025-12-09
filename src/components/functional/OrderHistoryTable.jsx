import GlassCard from "../ui/GlassCard";

export default function OrderHistoryTable() {
  return (
    <GlassCard>
      <h3 className="text-xl font-semibold mb-4">Order History</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2">Order ID</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-800">
              <td className="py-3">DATA FROM API</td>
              <td>DATA FROM API</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-violet-600/30 text-violet-300">
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
