import React from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "./dashboard-components/dashboard.component";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser && currentUser.role === "admin") return <></>;
  else if (currentUser && currentUser.role === "owner")
    return <DashboardComponent role="owner" />;
  else if (currentUser && currentUser.role === "customer")
    return <DashboardComponent role="customer" />;
};

export default Dashboard;
