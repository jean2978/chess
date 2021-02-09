import React, { useState, useEffect } from "react";
import Piece from "./ChessPiece";
import Sqaure from "./Square";
import { StyleSheet, css } from 'aphrodite';

const squareStyleWhite = {
  base: {
    backgroundColor: "white",
    width: "100px",
    height: "100px",
    display: "block",
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: ""
  },
  baseSelect: {
    backgroundColor: "white",
    width: "100px",
    height: "100px",
    display: "block",
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "red"
  }
};

const squareStyleBlack = {
  base: {
    backgroundColor: "black",
    width: "100px",
    height: "100px",
    display: "block",
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: ""
  },
  baseSelect: {
    backgroundColor: "black",
    width: "100px",
    height: "100px",
    display: "block",
    float: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "red"
  }
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

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row"
  },
  black: {
    backgroundColor: "black",
    border: "1px solid black",
    height: "80px",
    width: "80px"
  },
  white: {
    backgroundColor: "white",
    border: "1px solid black",
    height: "80px",
    width: "80px"
  }
});

let functionCount = 0;

const square = i => {
  const items = [];
  if ((functionCount + 1) % 2 !== 0) {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 !== 0) {
        items.push(<Sqaure style={squareStyleWhite} />);
      } else {
        items.push(<Sqaure style={squareStyleBlack} />);
      }
    }
  } else {
    for (let index = 0; index < i; index++) {
      if ((index + 1) % 2 !== 0) {
        items.push(<Sqaure style={squareStyleBlack} />);
      } else {
        items.push(<Sqaure style={squareStyleWhite} />);
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
      items.push(<div id={index} style={side ? squareStyleBlack.base : squareStyleWhite.base}><p style={peasentPlaceholder}>B</p></div>);
    } else {
      items.push(<div id={index} style={side ? squareStyleWhite.base : squareStyleBlack.base}> <p style={peasentPlaceholder}>B</p></div >);
    }
  }
  return items;
}

//Resterande pjäser
const bottomRow = (i, side) => {
  const items = [];
  for (let index = 0; index < i; index++) {
    if ((index + 1) % 2 !== 0) {
      items.push(<div style={side ? squareStyleWhite.base : squareStyleBlack.base}><Piece play={index} /></div>);
    } else {
      items.push(<div style={side ? squareStyleBlack.base : squareStyleWhite.base}><Piece play={index} /></div>);
    }
  }
  return items;
}













const Canvas = () => {
  const [row, setRow] = useState(false);
  const alex_jones = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const infoWars = [8, 7, 6, 5, 4, 3, 2, 1];

  //Board
  function RenderColumn(i) {
    const items = [];
    for (let index = 0; index < i; index++) {

      items.push(<div className={css(styles.row)}>{RenderBoard(8, infoWars[index])}</div>)
    }
    return items;
  }

  const RenderBoard = (i, a) => {
    const items = [];
    for (let index = 0; index < i; index++) {
      items.push(<div id={alex_jones[index] + "-" + a} className={(index + a) % 2 !== 0 ? css(styles.black) : css(styles.white)}></div>)
    }
    return items;
  }

  useEffect(() => {
    for (let index = 0; index < 8; index++) {
      document.getElementById(alex_jones[index] + "-2").appendChild(document.createElement("div"));
      document.getElementById(alex_jones[index] + "-7").appendChild(document.createElement("div"));
    }
  })



  return <React.Fragment>
    {/* <div style={{ overflow: "hidden", textAlign: "center" }}>{bottomRow(8, true)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{topRow(8, true)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{square(8)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{topRow(8, false)}</div>
    <div style={{ overflow: "hidden", textAlign: "center" }}>{bottomRow(8, false)}</div> */}
    {RenderColumn(8)}
  </React.Fragment>;
};

export default Canvas;
