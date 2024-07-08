import React, { useEffect, useRef, useState } from "react";
import "./CardContainer.scss";
import CardList from "../CardList/CardList";
import CardContainerTitle from "../CardContainerTitle/CardContainerTitle";

const cardArray = Array(10).fill(1);
function CardContainer({ title = "Count" }) {
  const [isOpen, setIsOpen] = useState(true);

  const updatesOpenStatus = () => setIsOpen((prev) => !prev);

  return (
    <div className={isOpen ? "card-container" : "closed-container"}>
      <CardContainerTitle
        title={title}
        openStatus={isOpen}
        onIconClick={updatesOpenStatus}
      />
      <div className={isOpen ? "open-container-list" : "closed-container-list"}>
        <CardList cards={cardArray} />
      </div>
    </div>
  );
}

export default CardContainer;
