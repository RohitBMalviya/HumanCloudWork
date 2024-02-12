import React from "react";
import { Container } from "@mui/material";

function MenuItems({ name, iconOpened, iconClosed, subItems }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onClick={toggleMenu}
      >
        {name}
        {iconOpened && iconClosed && (isOpen ? iconOpened : iconClosed)}
      </Container>
      {isOpen && subItems && (
        <div style={{ marginLeft: "20px" }}>
          {subItems.map((subItem, index) => (
            <div key={index}>
              <Container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {subItem.name}
              </Container>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItems;
