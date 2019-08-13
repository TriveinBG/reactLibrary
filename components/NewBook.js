import React from 'react'
import {connect} from 'react-redux';

export class NewBook extends React.Component {
    render() {
    let outerStyle = {
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

    let addCircle = {
        border: "2px solid black",
        borderRadius: "50%",
        height: 70,
        width: 70,
        // margin: "20px 0 0 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        position: "relative",
        backgroundColor: "rgba(70, 163, 42, 0.8)",
    }

    let sideA = {
        position: "absolute",
        height: 50,
        width: 10,
        background: "#ffffff",
        borderRadius: 10
    }

    let sideB = {
        position: "absolute",
        height: 10,
        width: 50,
        background: "#ffffff",
        borderRadius: 10
    }

    let text = {
        margin: "10px 0 0 0",
        textAlign: "center",
        fontSize: 20
    }
    return (
        <div style={{margin: 5}} onClick={() => this.props.addBook()}>
            <div style={outerStyle}>
                <div style={addCircle}>
                    <div style={sideA}></div>
                    <div style={sideB}></div>
                </div>
                <div style={text}><span style={{fontSize:25, margin:5}}>ADD</span> New Book</div>
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
                book: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: () => {
            dispatch({
                type:"ADD_BOOK",
                payload: {content: "New Book"}
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);