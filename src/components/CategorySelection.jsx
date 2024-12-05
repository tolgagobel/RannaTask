import React, { useState } from "react";

const categories = [
  "Dining",
  "Attractions",
  "Shopping",
  "Health",
  "Restaurants",
  "Cafés",
  "Clubs",
  "Pastries",
  "Bars",
  "Other",
];

const CategorySelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [city, setCity] = useState("");

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleApply = () => {
    console.log("Selected Categories:", selectedCategories);
    console.log("Selected City:", city);
  };

  return (
    <div className="category-selection">
      <div className="header">
        <h2>Category Selection</h2>
        <button className="close-button">✕</button>
      </div>
      <hr />
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategories.includes(category) ? "selected" : ""
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div className="city-selection">
        <h3>City Selection</h3>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Ankara">Ankara</option>
          <option value="Izmir">Izmir</option>
        </select>
      </div>
      <button className="apply-button" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
};

export default CategorySelection;
