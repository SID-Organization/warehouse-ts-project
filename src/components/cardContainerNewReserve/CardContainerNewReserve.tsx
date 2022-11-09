import "./styles.scss";
import React, { useState } from "react";

import hammer from "../../assets/hammer.png";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import remove from "../../assets/remove.png";

export default function CardContainerNewReserve() {
  const [value, setValue] = useState(0);

  function increaseValue() {
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue(value - 1);
    if (value === 0) {
      setValue(0);
    }
  }

  return (
    <div className="containerCard">
      <div className="containerImgAndName">
        <div className="img">
          <img src={hammer} alt="gradeLayout" />
        </div>
        <div className="name">
          <h1>Martelo caso o nome seja maior</h1>
        </div>
      </div>
      <div className="containerQty">
        <div className="qtyInput">
          <div className="containerMinus" onClick={decreaseValue}>
            <img src={minus} alt="minus" />
          </div>
          <div className="containerInput">
            <input
              className="inputNumber"
              type="text"
              value={value}
              onChange={(e) => setValue(value)}
            />
          </div>
          <div className="containerPlus" onClick={increaseValue}>
            <img src={plus} alt="plus" />
          </div>
        </div>
      </div>
      <div className="containerRemove">
        <img src={remove} alt="remove" />
      </div>
    </div>
  );
}
