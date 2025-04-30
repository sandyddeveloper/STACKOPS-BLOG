import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import {
  HomeOutlined as HomeIcon,
  PeopleOutlined as TeamIcon,
  ContactsOutlined as ContactsIcon,
  ReceiptOutlined as ReceiptIcon,
  PersonOutlined as ProfileIcon,
  CalendarTodayOutlined as CalendarIcon,
  HelpOutlineOutlined as FAQIcon,
  BarChartOutlined as BarChartIcon,
  PieChartOutlineOutlined as PieChartIcon,
  TimelineOutlined as TimelineIcon,
  MenuOutlined as MenuIcon,
  MapOutlined as MapIcon,
} from "@mui/icons-material";

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  // Auto collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { id: 1, label: "Dashboard", icon: HomeIcon, to: "/" },
    { id: 2, label: "Manage Team", icon: TeamIcon, to: "/team" },
    { id: 3, label: "Contacts Info", icon: ContactsIcon, to: "/contacts" },
    { id: 4, label: "Invoices", icon: ReceiptIcon, to: "/invoices" },
    { id: 5, label: "Profile", icon: ProfileIcon, to: "/form" },
    { id: 6, label: "Calendar", icon: CalendarIcon, to: "/calendar" },
    { id: 7, label: "FAQ", icon: FAQIcon, to: "/faq" },
    { id: 8, label: "Bar Chart", icon: BarChartIcon, to: "/bar" },
    { id: 9, label: "Pie Chart", icon: PieChartIcon, to: "/pie" },
    { id: 10, label: "Line Chart", icon: TimelineIcon, to: "/line" },
    { id: 11, label: "Map Chart", icon: MapIcon, to: "/geography" },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        "& .sidebar": {
          background: "#F5F3FF",
          color: "#333",
          borderRight: "1px solid #E0E0E0",
          transition: "all 0.3s ease",
        },
        "& .sidebar .menu-item": {
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "8px",
          transition: "background-color 0.3s",
        },
        "& .sidebar .menu-item:hover": {
          backgroundColor: "#EDE9FE",
        },
      }}
    >
      <div
        className={`sidebar ${collapsed ? "w-16" : "w-64"} transition-all`}
      >
        <div className="p-2 flex justify-between items-center">
          <Tooltip title={collapsed ? "Expand" : "Collapse"} placement="right">
            <IconButton
              onClick={() => setCollapsed(!collapsed)}
              sx={{
                transition: "transform 0.3s",
                transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          {!collapsed && (
            <Typography variant="h6" fontWeight="bold" color="#7B61FF">
              DevPanel
            </Typography>
          )}
        </div>

        {/* Menu Items */}
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${selected === item.label ? "active" : ""}`}
            onClick={() => setSelected(item.label)}
          >
            <item.icon
              style={{
                color: selected === item.label ? "#7B61FF" : "#555",
                fontSize: 20,
              }}
            />
            {!collapsed && <span className="ml-2">{item.label}</span>}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SidebarComponent;
