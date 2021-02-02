import React, { useState } from 'react';
import Draggable from 'react-draggable';
// import yapper from '../Resources/694517701447778324-trimmy.jpg'

const circlePlaceholder = {
    height: "50px",
    width: "50px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

}

const selectPlay = (index) => {
    switch (index) {
        case 0:
            return "T";
            break;
        case 1:
            return "H";
            break;
        case 2:
            return "K";
            break;
        case 3:
            return "D";
            break;
        case 4:
            return "kung";
            break;
        case 5:
            return "K";
            break;
        case 6:
            return "H";
            break;
        case 7:
            return "T";
            break;
    }
}

const Piece = ({ play }) => {
    return (
        <span style={circlePlaceholder}>{selectPlay(play)}</span>
    )
}

export default Piece;