import React from 'react'

export function Book(props) {

    let outerStyle = {
        margin: 5,
        border: "2px solid black",
        height: 160, width: 100, 
        borderRadius: 20,
        posistion: "relative",
        display: "flex",
        justifyContent: "center",
        background: "#ededed",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <div style={outerStyle}>
            <p>{props.text}</p>
            <p>{props.id}</p>
        </div>
    )
}