import React, { useState } from "react";

const squareStyleWhite = {
  backgroundColor: "white",
  width: "100px",
  height: "100px",
  display: "block",
  float: "left"
};

const squareStyleBlack = {
  backgroundColor: "black",
  width: "100px",
  height: "100px",
  display: "block",
  float: "left"
};

let functionCount = 0;

const square = i => {
  const items = [];
  if ((functionCount + 1) % 2 != 0) {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 != 0) {
        items.push(<div style={squareStyleWhite}>dsadas</div>);
      } else {
        items.push(<div style={squareStyleBlack}>asdasd</div>);
      }
    }
  } else {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 != 0) {
        items.push(<div style={squareStyleBlack}>sadasd</div>);
      } else {
        items.push(<div style={squareStyleWhite}>asdas</div>);
      }
    }
  }
  functionCount++;
  return items;
};

const rows = i => {
  const items = [];
  for (let index = 0; index < i; index++) {
    items.push(<div style={{ overflow: "hidden" }}>{square(8)}</div>);
  }
  return items;
};

const Canvas = () => {
  const [color, setColor] = useState("");
  return <React.Fragment>{rows(1)}</React.Fragment>;
};

export default Canvas;
