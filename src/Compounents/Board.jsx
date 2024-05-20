import React from "react";
import Style from "./Board.module.css";
function Board(props) {
  return (
    <div className={Style.box} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Board;
