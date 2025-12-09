// import AnimatedContainer from "../components/ui/AnimatedContainer";
// import PageHeader from "../components/ui/PageHeader";
// import StatCard from "../components/ui/StatCard";
// import InventoryTable from "../components/functional/InventoryTable";

// export default function AdminInventory() {
//   return (
//     <AnimatedContainer>
//       <div className="max-w-6xl mx-auto p-8">

//         <PageHeader
//           title="Inventory Control"
//           subtitle=""
//         />

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           <StatCard label="Total Items" value="DATA FROM API" />
//           <StatCard label="Low Stock" value="DATA FROM API" />
//           <StatCard label="Out of Stock" value="DATA FROM API" />
//         </div>

//         <InventoryTable />
//       </div>
//     </AnimatedContainer>
//   );
// }

import AnimatedContainer from "../components/ui/AnimatedContainer";
import PageHeader from "../components/ui/PageHeader";
import StatCard from "../components/ui/StatCard";
import InventoryTable from "../components/functional/InventoryTable";
import Skeleton from "../components/ui/Skeleton";

export default function AdminInventory() {
  const loading = false; // Replace later with real loading

  return (
    <AnimatedContainer>
      <div className="max-w-6xl">
        <PageHeader
          title="Inventory Control"
          subtitle="Real-time stock monitoring system"
        />

        {loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatCard label="Total Items" value="DATA FROM API" />
              <StatCard label="Low Stock" value="DATA FROM API" />
              <StatCard label="Out of Stock" value="DATA FROM API" />
            </div>

            <InventoryTable />
          </>
        )}
      </div>
    </AnimatedContainer>
  );
}
