import * as React from 'react'
//eslint-disable-next-line
import Searchbar from './searchbar'
import FilterBooks from './filterbook'
import BookShelf from './bookShelf'
import MidButton from './midButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton'; import ActionHome from 'material-ui/svg-icons/action/home';
import { Button } from '@material-ui/core';


class Home extends React.Component {
    
    constructor(props) {
   
    // const storageValue = JSON.parse(localStorage.getItem('books'));

        super(props); {
            this.state = {
                CurrentBookstate: '',
                searchBar:  [] || '',
                books:  [],
                query: '',
                keyup: '',
                shelfChange: false,
                backBtn: false,
                disabled: false,
                ls: '',

            }
            // this.middleHandler= this.middleHandler.bind(this)
        }
    }
    backHandler=()=>{
        this.setState({
            shelfChange: false,
            backBtn: true,
            disabled: false
        })
    }
    middleHandler() {
        // this.props.history.push('./bookShelf')
        this.setState({
            shelfChange: true,
            disabled: true
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

        const api = 'https://www.googleapis.com/books/v1/volumes?q=books';
        fetch(`${api}${e}`, {
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
                    // searchBar: [json.items]

                })
            })
    //  localStorage.setItem('books', JSON.stringify(books));
        
            console.log(books)
    }
// arrEmpty(e){
//     this.setState({
//         books: []
//     })
//     console.log('submitter',e)
// }

   componentWillUpdate = (nextProps, nextState) => {
        const { books } = this.state
        localStorage.setItem('books', JSON.stringify(nextState.books));
        localStorage.setItem('booksdate', Date.now);
        console.log(nextState.books, "updtr")
    }
  render() {
        const { books,shelfChange,searchBar } = this.state
        
        return (
            <div>
                {this.state.shelfChange === true ?
                    <div>
                        <Searchbar bookSearchHandler={this.bookSearchHandler} inputHandler={this.inputHandler.bind(this)}
                        searchBar={searchBar}   />
                        <FilterBooks books={books}  searchFilter={this.state.searchBar} />
                        <IconButton  style={{
                        position: 'fixed',
                        top: '0px' ,left: '10px', fontSize: '5vh' , color: 'white'
                        }} 
                        onClick={this.backHandler.bind(this)}>
                        <i class="fa fa-arrow-circle-left"></i>      
                           </IconButton>
                    </div>
                    : <BookShelf />
                }
                <div>
                    <FloatingActionButton primary={true} style={{
                        position: 'fixed',
                        bottom: '10px', right: '10px'
                    }} 
                    disabled={this.state.disabled === true}                    
                    onClick={this.middleHandler.bind(this)}>
                        <ContentAdd />
                    </FloatingActionButton>
                    {/* <button type='submit' style={{position: 'fixed', */}
                 {/* bottom: '10px', right: '10px'}}  onClick={this.middleHandler.bind(this)}> + </button> */}
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