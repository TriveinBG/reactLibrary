import React from 'react';
import NewBook from './components/NewBook';
import {Book} from './components/Books';
import {connect} from 'react-redux';


export class App extends React.Component {

    // constructor() {
    //     super()
    // }
        render() {

            const books = this.props.book.map((book, index) => {
                    return(
                        <Book text={book.content} key={index} id={index}/>
                    )
                }
            )

            const log = () => console.log(this.props.book)

            return(
                <div>
                    <div className="container" style={{margin: 40}}>
                        <h1>My Library</h1>
                            <div style={{display: "flex", flexWrap: "wrap"}}>
                                {books}
                                <NewBook onClick={log}/>
                            </div>
                    </div>
                </div>
            )   
        }
}

const mapStateToProps = (state) => {
    return {
                book: state.text
    }
}

export default connect(mapStateToProps, )(App);