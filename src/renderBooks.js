import * as React from 'react'
import * as mui from 'material-ui'

 class RenderBooks extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectvalue: '',
            arr: [],
        }
    }


// selectHandler(e){
//     const {selectvalue} = this.state
//         let pury = e.toString();
//         var get = JSON.parse(localStorage.getItem('books'));
//         // let pury = setByVal;
//         this.setState({
//             selectvalue: pury,
//         })

//         const currUser = {
//             selectvalue: 0,
//             images: this.props.images,
//             title: this.props.title,
//             publisher: this.props.publisher,
//             publishedDate: this.props.publishedDate,   
//         }
//         const readUser = {
//             selectvalue: 2,
//             images: this.props.images,
//             title: this.props.title,
//             publisher: this.props.publisher,
//             publishedDate: this.props.publishedDate,   
//         }
//         const wantUser = {
//             selectvalue: 1,
//             images: this.props.images,
//             title: this.props.title,
//             publisher: this.props.publisher,
//             publishedDate: this.props.publishedDate,   
//         }
//         var curr = localStorage.setItem('currState', JSON.stringify(currUser));
//         var want = localStorage.setItem('wantState', JSON.stringify(wantUser));
//         var read = localStorage.setItem('readState', JSON.stringify(readUser));

    
//         // console.log(pury,"value ", get," ls",setByVal,"set")
//         console.log(this.state.selectvalue,"ls state")
//         console.log(this.props.title,"handler")

//     }


componentWillReceiveProps(props){
    console.log('next props', this.props.title)
}
// componentDidMount = (props) => {
//     console.log('did props', this.props.title)

//     const user = {
//         images: this.props.images,
//         title: this.props.title,
//         publisher: this.props.publisher,
//         publishedDate: this.props.publishedDate,

//     }  
// }
currStateHandler(){
    const currUser = {
        selectvalue: 0,
        images: this.props.images,
        title: this.props.title,
        publisher: this.props.publisher,
        publishedDate: this.props.publishedDate,  
        bookId: this.props.id 
    }
    // const arr= []
    // localStorage.setItem('readState', JSON.stringify(readUser));        // return arr
       let getArrOfObject = JSON.parse(localStorage.getItem('currState')) || [] ;
    //    let length = getArrOfObject.length;
    //    let uniqueArr = []
        var filtered = getArrOfObject.filter((e)=>{
            return e.bookId === currUser.bookId
            console.log(currUser.bookId)
        }).length;
        if(!filtered){
            getArrOfObject.push(currUser)
            localStorage.setItem('currState', JSON.stringify(getArrOfObject));             

        }
        else{
            console.log('enter already');
            alert('You already Entered this Book in Current Shelf ')
            }
    //    console.log(length   )
    //    getArrOfObject.push(currUser)

}
wantStateHandler(e){
    const wantUser = {
        selectvalue: 1,
        images: this.props.images,
        title: this.props.title,
        publisher: this.props.publisher,
        publishedDate: this.props.publishedDate,   
        bookId: this.props.id ,
    }
    // const arr= []
    // localStorage.setItem('readState', JSON.stringify(readUser));        // return arr
       var getArrOfObject = JSON.parse(localStorage.getItem('wantState')) || [] ;
       
       var filtered = getArrOfObject.filter((e)=>{
        return e.bookId === wantUser.bookId
        console.log(wantUser.bookId)
         }).length;
        if(!filtered){
        getArrOfObject.push(wantUser)
        localStorage.setItem('wantState', JSON.stringify(getArrOfObject));             
          }
         else{
        console.log('enter already');
        alert('You already Entered this Book in Want To Read Shelf')
        }

}

readStateHandler(e){

    const readUser = {
        //  'curr' : [{
        selectvalue: 2,
        images: this.props.images,
        title: this.props.title,
        publisher: this.props.publisher,
        publishedDate: this.props.publishedDate,  
        bookId: this.props.id,
    // }] 
        }
            // const arr= []
        // localStorage.setItem('readState', JSON.stringify(readUser));        // return arr
           var getArrOfObject = JSON.parse(localStorage.getItem('readState')) || [] ;
          
      // Checking there is bokk exist already or not
        //    
           var filtered = getArrOfObject.filter((e)=>{
            return e.bookId === readUser.bookId
             }).length;
            if(!filtered){
            getArrOfObject.push(readUser)
            localStorage.setItem('readState', JSON.stringify(getArrOfObject));             
              }
             else{
            console.log('enter already');
            alert('You already Entered This Book In Read Shelf ')
            }

        // var entries = Object.entries(readUser);
        // entries.forEach(entry => {
        //     let key = entry[0];
        //     let value = entry[1];
        //     let fn = key + value
        //     // arr.push(get)
        //     arr.push({fn})
        //     localStorage.setItem('readState', JSON.stringify(arr));
        //     console.log(entry, "foreach")
        // })
    //     const arr = new Array()      
    //     console.log(Object.keys, "keeeys")
    //     if(get !== null){ 
    //     arr.push(get)
       
    //     localStorage.setItem('readState', JSON.stringify(arr));        // return arr
    // }
    // else{
    //     localStorage.setItem('readState', JSON.stringify(undefined));        // return arr
    // }
    // console.log(e,"read")
}

     render() { 
         const {images} = this.props
    return (
        <div>
    {this.props.id && this.props.title || this.props.publishedDate || this.props.publisher && this.props.images ? // ye is liye karna para q ky baad men id chahye thi or kisi kisi book men id nahi thi 
    <div>
         <mui.Paper style={style} zDepth={5} > 
     <div >React Book </div>
     <div style={{width: '18rem'}}>
         {/* <img  /> */}
         <img src={this.props.images} alt="React Books image wali"  />
         <div >
         <h4 > Title : {this.props.title}</h4>
         <p >Publisher :{this.props.publisher}</p>
         <p > PubLished Date:  {this.props.publishedDate}</p>
         <p > Bood Id :  {this.props.id}</p>
         </div> 
     </div>
     <button type='submit' onClick={this.currStateHandler.bind(this)}> currState </button>
     <button type='submit' onClick={this.wantStateHandler.bind(this)}> wantState </button>
     <button type='submit' onClick={this.readStateHandler.bind(this)}> read </button> 
     </mui.Paper></div>  :
      <h1>Sorry this Book Not Valid </h1> }
   
        {/* <select value={this.state.selectvalue} 
         onChange={e => this.selectHandler(e.target.value) } >
            <option   >Choose any State</option>
            <option value={0}> Current </option>
            <option value={1}> want </option>
            <option value={2}> read </option>
        </select> */}
        <br/><br/>
    </div>
    )
}
 }

 const style = {
    height: '25%',
    width: '35%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
export default RenderBooks