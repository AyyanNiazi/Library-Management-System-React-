import * as React from 'react'
import Searchbar from './searchbar'
import FilterBooks from './filterbook'
import BookShelf from './bookShelf'
import MidButton from './midButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class Home extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                CurrentBookstate: '',
                searchBar:  [],
                books: [],
                query: '',
                keyup: '',
                shelfChange: false,
                ls: '',

            }
            // this.middleHandler= this.middleHandler.bind(this)
        }
    }
    middleHandler() {
        // this.props.history.push('./bookShelf')
        this.setState({
            shelfChange: true
        })
        console.log('midle buton')
    }


    inputHandler = (e) => {

        // console.log(e.target.value)
        this.setState({
            searchBar: e.target.value
        })

   

        // console.log(e.targe.value)
    }

    //  Local Storage


    bookSearchHandler = (e) => {
        const {searchBar,books} = this.state
        e.preventDefault()



        const api = 'https://www.googleapis.com/books/v1/volumes?q=react';
        fetch(`${api}${searchBar}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Methods': 'POST, GET'
            }
        }).then(response => response.json())
          .then((json) => {
                this.setState({
                    books: [json.items],
                })
            })
        
            console.log(books)
    }

   componentWillUpdate = (nextProps, nextState) => {
        const { books } = this.state
        localStorage.setItem('books', JSON.stringify(nextState.books));
        localStorage.setItem('booksdate', Date.now);
    }
  render() {
        const { books } = this.state
        
        return (
            <div>
                {this.state.shelfChange === true ?
                    <div>
                        <Searchbar bookSearchHandler={this.bookSearchHandler} inputHandler={this.inputHandler.bind(this)}
                        searchBar={this.state.searchBar} />
                        <FilterBooks midButton={this.state.shelfChange === true} books={books}  searchFilter={this.state.searchBar} />
                    </div>
                    : <BookShelf />
                }
                <div>
                    <FloatingActionButton primary={true} style={{
                        position: 'fixed',
                        bottom: '10px', right: '10px'
                    }} onClick={this.middleHandler.bind(this)}>
                        <ContentAdd />
                    </FloatingActionButton>
                    {/* <button type='submit' style={{position: 'fixed',
                 bottom: '10px', right: '10px'}}  onClick={this.middleHandler.bind(this)}> + </button> */}
                </div>




                {/* {this.state.books === [] ? <h1> Please select a Book For example "React"  </h1> */}
                {/* : */}

                {/* } */}
                {/* <CurrentBook CurrentBookstate={this.CurrentBookstateHandler} /> */}

                {/* <WantRead/> */}
                {/* <Read/> */}
                {/* <ul> 
                {this.state.books.map((books,i)=>{
                    return books.map((val,i)=>{
                        return (
                            <div key={i} >
                            <li> {val.volumeInfo}  </li>                                 
                            </div>
                        )
                    })
                    
                })} */}
                {/* <li> {this.state.books.kind} </li> */}
                {/* </ul> */}
            </div>
        )
    }
}

export default Home