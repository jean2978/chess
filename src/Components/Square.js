import React, { useState } from 'react';


const Sqaure = (style) => {
    const [color, setColor] = useState(style.style.base);
    const selectSqaure = () => {
        setColor(style.style.baseSelect)
        console.log(color);
    }
    return (
        <div onClick={selectSqaure} style={color}></div>
    )
}


export default Sqaure;