import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem.jsx";

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-white/10 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        Pharma Admin
      </h1>

      <nav className="space-y-4">
        <NavItem to="/" label="Inventory" active={pathname === "/"} />
        <NavItem to="/orders" label="Orders" active={pathname === "/orders"} />
      </nav>
    </aside>
  );
}
