import React, { useState } from "react";
import Home from "../pages/home";

const HeaderItems = [
  {
    title: 'Home',
    comp: <Home />,
    icon: "" // You can add an icon class or element here
  },
  {
    title: 'About Me',
    comp: "",
    icon: "" // You can add an icon class or element here
  },
  {
    title: 'Blog',
    comp: "",
    icon: "" // You can add an icon class or element here
  },
];

const Header = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(<Home />);

  const handleItemClick = (index) => {
    setActiveItemIndex(index);
  };

  const ActiveComponent = HeaderItems[activeItemIndex].comp;

  return (
    <>
      <ul>
        {HeaderItems.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        {/* Render the active component based on the selected item */}
        <ActiveComponent />
      </div>
    </>
  );
};

export default Header;
