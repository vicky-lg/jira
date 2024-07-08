import React from "react";
import propTypes from "prop-types";
import "./CardList.scss";
import Card from "../Card/Card";

function CardList({ cards = [] }) {
  console.log("rendering");
  return (
    <div className="card-list">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  cards: propTypes.array,
};

export default React.memo(CardList);
