import React, { useState } from "react";
import { FaUtensils, FaCamera, FaShoppingBag, FaHeartbeat } from "react-icons/fa";

const Membership = () => {

  const [selectedCard, setSelectedCard] = useState("silver");
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const getCardClass = (card) => {
    if (card === selectedCard) {
      return `${card} selected`;
    }
    return card;
  };

  const getIconColor = (card) => {
    if (card === selectedCard) {
      switch (card) {
        case "silver":
          return "#8b8b8b";
        case "gold":
          return "#e8b848";
        case "diamond":
          return "#8a4bc3";
        default:
          return "#fff";
      }
    }
    return "#fff";
  };

  return (
    <div className="membership-container">
      <div className="membership-cards">
        <div
          className={`membership-card ${getCardClass("silver")}`}
          onClick={() => handleCardClick("silver")}
        >
          Silver Membership
        </div>
        <div
          className={`membership-card ${getCardClass("gold")}`}
          onClick={() => handleCardClick("gold")}
        >
          Gold Membership
        </div>
        <div
          className={`membership-card ${getCardClass("diamond")}`}
          onClick={() => handleCardClick("diamond")}
        >
          Diamond Membership
        </div>
      </div>

      <div className="categories">
        <div className="category">
          <FaUtensils className="icon" style={{ color: getIconColor(selectedCard) }} />
          <span>Dining</span>
        </div>
        <div className="divider"></div>
        <div className="category">
          <FaCamera className="icon" style={{ color: getIconColor(selectedCard) }} />
          <span>Attractions</span>
        </div>
        <div className="divider"></div>
        <div className="category">
          <FaShoppingBag className="icon" style={{ color: getIconColor(selectedCard) }} />
          <span>Shopping</span>
        </div>
        <div className="divider"></div>
        <div className="category">
          <FaHeartbeat className="icon" style={{ color: getIconColor(selectedCard) }} />
          <span>Health</span>
        </div>
      </div>
    </div>
  );
};

export default Membership;
