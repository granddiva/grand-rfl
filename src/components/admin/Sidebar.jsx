import { NavLink } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const iconMap = {
  dashboard: (
    <path d="M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z" />
  ),
  orders: (
    <path d="M4 6h16v2H4zm2 4h12v8H6zm3-6h6l1 2H8z" />
  ),
  customers: (
    <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
  ),
  rider: (
    <path d="M4 15h4a3 3 0 1 0 0 2H6v1h2a3 3 0 1 0 0-6H4zm11-7h3l2 5h-2.1a3 3 0 1 0 0 2H21v-2h-2l-1.1-3H15z" />
  ),
  service: (
    <path d="M12 3l2.2 2.2 3-.5.8 2.9L21 9l-1.8 2.4.6 3-2.9.8L16 18l-2.4-1.8-3 .6-.8-2.9L7 13l1.8-2.4-.6-3 2.9-.8L12 3zm0 5a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
  ),
  report: (
    <path d="M6 3h9l4 4v14H6zm8 1v4h4M9 12h6M9 16h6" />
  ),
  settings: (
    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm9 4-2.1 1.2.2 2.4-2.3.8-1.4 2-2.3-.9-2 .9-1.4-2-2.3-.8.2-2.4L3 12l2.1-1.2-.2-2.4 2.3-.8 1.4-2 2.3.9 2-.9 1.4 2 2.3.8-.2 2.4z" />
  ),
};

function Icon({ type }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {iconMap[type]}
    </svg>
  );
}

function Sidebar({ menuItems }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <Avatar
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <AvatarImage
            src="/avatar-boy.jpg"
            alt="Admin"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <div>
          <h2>LaundryPro</h2>
          <p>Admin Panel</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            className={({ isActive }) =>
              `menu-item ${isActive ? "active" : ""}`
            }
            to={item.path}
          >
            <Icon type={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <strong>Admin Laundry</strong>
        <span>atmiran@laundrypro.id</span>
      </div>
    </aside>
  );
}

export default Sidebar;