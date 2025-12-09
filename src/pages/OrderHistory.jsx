// import AnimatedContainer from "../components/ui/AnimatedContainer";
// import PageHeader from "../components/ui/PageHeader";
// import OrderHistoryTable from "../components/functional/OrderHistoryTable";

// export default function OrderHistory() {
//   return (
//     <AnimatedContainer>
//       <div className="max-w-6xl mx-auto p-8">

//         <PageHeader
//           title="Order History"
//           subtitle=""
//         />

//         <OrderHistoryTable />

//       </div>
//     </AnimatedContainer>
//   );
// }

import AnimatedContainer from "../components/ui/AnimatedContainer";
import PageHeader from "../components/ui/PageHeader";
import OrderHistoryTable from "../components/functional/OrderHistoryTable";
import Skeleton from "../components/ui/Skeleton";

export default function OrderHistory() {
  const loading = false;

  return (
    <AnimatedContainer>
      <div className="max-w-6xl">
        <PageHeader
          title="Order History"
          subtitle="Audit-grade order tracking"
        />

        {loading ? <Skeleton /> : <OrderHistoryTable />}
      </div>
    </AnimatedContainer>
  );
}
