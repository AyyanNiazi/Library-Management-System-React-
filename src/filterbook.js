import * as React from 'react'
import RenderBooks from './renderBooks'

// function searchingByWords(keyup){
//     return function(v){
//         return  v.authors.toLowerCase().includes(keyup.toLowerCase()) || !keyup;

//     }



// }

class FilterBooks extends React.Component{
    render() {
        
        // console.log('props',books)
        return (
            <div>
                <ul>
                    {this.props.books.map((val, i) => {
                        return val.map((val)=>{
                            return (
                                <div>
                                    <RenderBooks
                                        // images={val.volumeInfo.imageLinks.thumbnail}
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