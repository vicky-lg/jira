import React, { useState } from "react";
import "./CardContainerTitle.scss";
import Arrow from "@app/assets/icons/Arrow.svg";

function CardContainerTitle({ title, openStatus, onIconClick }) {
  return (
    <div className="card-container-title">
      <p>{openStatus ? title : ""}</p>
      <button onClick={onIconClick}>
        <Arrow className={openStatus ? "close" : "open"} />
      </button>
    </div>
  );
}

export default CardContainerTitle;
