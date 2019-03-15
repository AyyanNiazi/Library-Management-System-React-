import * as React from 'react'
import RenderBooks from './renderBooks'

// function searchingByWords(keyup){
//     return function(v){
//         return  v.authors.toLowerCase().includes(keyup.toLowerCase()) || !keyup;

//     }



// }

class FilterBooks extends React.Component{
    render() {
        //  const books = this.props.books.filter( (e) =>{
        //     return e.map((val)=>{
        //         return val.volumeInfo.title.indexOf(this.props.searchFilter) !== -1
        //     })
        // } )

        
        console.log('props',this.props.books)
        return (
            <div>
                <ul>
                    {this.props.books.map((v, i) => {
                        return v.map((val,i)=>{
                            return (
                                <div key={i} >
                                    <RenderBooks
                                        images={val.volumeInfo.imageLinks.thumbnail}
                                        title={val.volumeInfo.title}
                                        authors={val.volumeInfo.authors}
                                        publisher={val.volumeInfo.publisher}
                                        id={val.id}
                                    />
                            </div>  )  
                        })
                          
                    })}
                </ul>
            </div>
        )
    }
}
export default FilterBooks