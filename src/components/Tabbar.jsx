import React, { useState } from "react";
import { FaHome, FaCreditCard, FaHeart, FaSearch } from "react-icons/fa";

const TabBar = () => {

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="tab-bar">
      <div
        className={`tab-item ${activeTab === "home" ? "active" : ""}`}
        onClick={() => setActiveTab("home")}
      >
        <FaHome className="icon" />
      </div>
      <div
        className={`tab-item ${activeTab === "card" ? "active" : ""}`}
        onClick={() => setActiveTab("card")}
      >
        <FaCreditCard className="icon" />
      </div>
      <div
        className={`tab-item ${activeTab === "heart" ? "active" : ""}`}
        onClick={() => setActiveTab("heart")}
      >
        <FaHeart className="icon" />
      </div>
      <div
        className={`tab-item ${activeTab === "search" ? "active" : ""}`}
        onClick={() => setActiveTab("search")}
      >
        <FaSearch className="icon" />
      </div>
    </div>
  );
};

export default TabBar;
