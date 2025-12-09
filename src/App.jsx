// import AdminInventory from "./pages/AdminInventory";
// import OrderHistory from "./pages/OrderHistory";

// export default function App() {
//   return (
//     <div>
//       <AdminInventory />
//       <div className="my-16"></div>
//       <OrderHistory />
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/ui/Sidebar";
import AdminInventory from "./pages/AdminInventory";
import OrderHistory from "./pages/OrderHistory";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="ml-64 w-full min-h-screen p-8">
          <Routes>
            <Route path="/" element={<AdminInventory />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
