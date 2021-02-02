import React from "react";
import Piece from "./ChessPiece";

const squareStyleWhite = {
  backgroundColor: "white",
  width: "100px",
  height: "100px",
  display: "block",
  float: "left",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const squareStyleBlack = {
  backgroundColor: "black",
  width: "100px",
  height: "100px",
  display: "block",
  float: "left",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const peasentPlaceholder = {
  height: "50px",
  width: "50px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

let functionCount = 0;

const square = i => {
  const items = [];
  if ((functionCount + 1) % 2 !== 0) {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 !== 0) {
        items.push(<div style={squareStyleWhite}></div>);
      } else {
        items.push(<div style={squareStyleBlack}></div>);
      }
    }
  } else {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 !== 0) {
        items.push(<div style={squareStyleBlack}></div>);
      } else {
        items.push(<div style={squareStyleWhite}></div>);
      }
    }
  }
  functionCount++;
  return items;
};

//Bönderna
const topRow = (i, side) => {
  const items = [];
  for (let index = 0; index < i; index++) {
    if ((index + 1) % 2 !== 0) {
      items.push(<div style={side ? squareStyleBlack : squareStyleWhite}><p style={peasentPlaceholder}>B</p></div>);
    } else {
      items.push(<div style={side ? squareStyleWhite : squareStyleBlack}><p style={peasentPlaceholder}>B</p></div>);
    }
  }
  return items;
}

const randomData = {
  x: 0,
  y: 0
}

//Resterande pjäser
const bottomRow = (i, side) => {
  const items = [];
  for (let index = 0; index < i; index++) {
    if ((index + 1) % 2 !== 0) {
      items.push(<div style={side ? squareStyleWhite : squareStyleBlack}><Piece play={index} /></div>);
    } else {
      items.push(<div style={side ? squareStyleBlack : squareStyleWhite}><Piece play={index} /></div>);
    }
  }
  return items;
}

const Canvas = () => {
  return <React.Fragment>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{bottomRow(8, true)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{topRow(8, true)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{topRow(8, false)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{bottomRow(8, false)}</div>
  </React.Fragment>;
};

export default Canvas;
