import * as React from 'react'
import * as mui from 'material-ui'
// import MobileTearSheet from '../../../MobileTearSheet';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

 class ReadState extends React.Component {
     constructor(props){
         let storageValue = JSON.parse(localStorage.getItem('readState'));
        //  let byKey = localStorage.getItem('selectValue')
         super(props);
         this.state = {
            selectValue: storageValue ,
            initial: false,
            bookId: false,
            open: false,
            // byKey: byKey
         }
        //  console.log(storageValue.length)
     }
     handleClose = () => {
        this.setState({open: false});
        this.forceUpdate();
      };
 componentDidMount = () => {
    //     this.setState({
    //          books: JSON.parse(localStorage.getItem('books'))
    //    })
       console.log(this.state.selectValue,"ls")
    //    return true
}

wantToRead= (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('readState')) || [] ;
    let getarrayWant = JSON.parse(localStorage.getItem('wantState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)
    
    const filterArr = getarray.filter((e)=>{
            if(e.bookId === key){
                return true
            }
        })
   filterArr.forEach((element) => {getarray.splice(getarray.findIndex(f => 
        f.bookId === element.bookId), 1)
        
    });


    console.log(getarray, "upper wala arr", "splice arry", filterArr[0] )
    
    
    var filtered = getarrayWant.filter((e)=>{ // yahn py check hoga ky book want shelf men exist krti hy ya nahi
        return e.bookId === key
        }).length;
        // var finalFiltered = filterArr && filtered
        if(!filtered){
              getarrayWant.push(filterArr[0]) 
              localStorage.setItem('wantState', JSON.stringify(getarrayWant));  
              localStorage.setItem('currState', JSON.stringify(getarray));        // return arr
              this.setState({open: true});
              console.log(getarray,key,getarrayWant)
          // yahan py agar same na hui id tu jay ga warna nahi
          console.log('running')      // return arr
          }
         else{
        console.log('enter already');
        alert('You already Entered This Book In Want to Read Shelf ')
        }
    // getarray.forEach(function(obj) {
    //     for (index in obj){
	//         console.log(getarray[index] + getarray[value]);
	// 	    }
	// });
        // if(arr){
            //  getarrayWant.push(filterArr[0]) 
            // localStorage.setItem('wantState', JSON.stringify(getarrayWant));  
            // // arr.splice(arr.findIndex(e => e.bookId === key), 1)
            // localStorage.setItem('readState', JSON.stringify(getarray));        // return arr
            // console.log(getarray,key,getarrayWant)
        // }
        // else{
        //     console.log('not wroking')
        // }
          // return arr
    // const filterItem = getarray.filter((getarray)=>{
    //     return getarray !== removeVal
    // })
    console.log(key , "want state removers")
    // console.log(this.state.initial   , "orignal state removers")

// this.useForceUpdate() // ye component ko refresh krny k liye hy
// this.props.history.push('/')

}

currRead = (bookId) =>{
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('readState')) || [] ;
    let getarrayCurr = JSON.parse(localStorage.getItem('currState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)
    
    const filterArr = getarray.filter((e)=>{
            if(e.bookId === key){
                return true
            }
        })
   filterArr.forEach((element) => {getarray.splice(getarray.findIndex(f => 
        f.bookId === element.bookId), 1)
        
    });


    console.log(getarray, "upper wala arr", "splice arry", filterArr[0] )

     // Checking there is book exist already or not
       //curr state ki id check hogi
       var filtered = getarrayCurr.filter((e)=>{
        return e.bookId === key
        }).length;
        // var finalFiltered = filterArr && filtered
        if(!filtered){
            getarrayCurr.push(filterArr[0]) 
            localStorage.setItem('currState', JSON.stringify(getarrayCurr));   
            localStorage.setItem('readState', JSON.stringify(getarray));        // return arr

          // yahan py agar same na hui id tu jay ga warna nahi
          console.log('running')      // return arr
          }
         else{
        console.log('enter already');
        alert('You already Entered This Book In Current Read Shelf ')
        }
    // getarray.forEach(function(obj) {
    //     for (index in obj){
	//         console.log(getarray[index] + getarray[value]);
	// 	    }
	// });
        // if(arr){
           
            // arr.splice(arr.findIndex(e => e.bookId === key), 1)
            console.log(getarray,key,getarrayCurr)
        // }
        // else{
        //     console.log('not wroking')
        // }
          // return arr
    // const filterItem = getarray.filter((getarray)=>{
    //     return getarray !== removeVal
    // })
    console.log(key , "want state removers")
}

store = (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('readState')) || [] ;
    // let getarrayWant = JSON.parse(localStorage.getItem('wantState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)
    
    const filterArr = getarray.filter((e)=>{
            if(e.bookId === key){
                return true
            }
        })
   filterArr.forEach((element) => {getarray.splice(getarray.findIndex(f => 
        f.bookId === element.bookId), 1)
        
    });

    localStorage.setItem('readState', JSON.stringify(getarray));        // return arr

    // console.log(getarray, "upper wala arr", "splice arry", filterArr[0] )
    // getarray.forEach(function(obj) {
    //     for (index in obj){
	//         console.log(getarray[index] + getarray[value]);
	// 	    }
	// });
        // if(arr){

            // getarrayWant.push(filterArr[0]) 
            // localStorage.setItem('wantState', JSON.stringify(getarrayWant));  
            // arr.splice(arr.findIndex(e => e.bookId === key), 1)
            // console.log(getarray,key,getarrayWant)
        // }
        // else{
        //     console.log('not wroking')
        // }
          // return arr
    // const filterItem = getarray.filter((getarray)=>{
    //     return getarray !== removeVal
    // })
    console.log(key , "want state removers")
}


    render() { 
        const {selectValue} = this.state;
        const actions = [
            <mui.FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <mui.FlatButton
              label="Discard"
              primary={true}
              onClick={this.handleClose}
            />,]
    return (
        <div>
            {/* <h1> Read Books </h1> */}
           
            {/* {this.state.selectValue ?  
            this.state.selectValue.map((v,i)=>{
                   return <li>  {v}  </li>
                })
             :
        <h1>No data </h1> } */}

        {selectValue ? 
      <div> 
            <ul> {selectValue.map((val,i)=>{
        //    return val.map((val,i)=>{
               return ( 
                <div key={i}> 
                <List style={{float: 'left'}} >
                  <ListItem > <img src={val.images} /> </ListItem>
                </List>
                <Divider />
                <List  >
                  <ListItem secondaryText="Book Image" value={1} secondaryText={val.title}  primaryText="Title" rightIcon={<ActionInfo />} />
                  <ListItem value={2} secondaryText={val.publisher}  primaryText="Publisher" rightIcon={<ActionInfo />} />
                  <ListItem value={3} secondaryText={val.publishedDate}  primaryText="Published date" rightIcon={<ActionInfo />} />
                  <ListItem value={4} secondaryText={val.bookId}  primaryText="Book Id" rightIcon={<ActionInfo />} />
                </List>
                <Divider />
                <ListItem value={1} 
                nestedItems={ [
                    <ListItem
                      value={2}
                      primaryText="Want To Read Shelf"
                      onClick={this.wantToRead.bind(this, val.bookId)}
                    /> ,
                    <ListItem
                    value={2}
                    primaryText="Current Read Shelf"
                    onClick={this.currRead.bind(this,val.bookId)}/>,
                  <ListItem
                  value={this.state.bookId === true}
                  primaryText="Store"
                  onClick={this.store.bind(this,val.bookId)}
                  />
                    ,
                  ]}
                 primaryText="Want to Change Book Shelf..?" />
                 <br/>  <hr style={{border: '1px solid black'}} />
                </div>
               )
        })} </ul>
              <mui.Dialog
                  actions={actions}
                     modal={false}
                     open={this.state.open}
                 onRequestClose={this.handleClose}>
          Your Book Succesfully Added Succesfully 
        </mui.Dialog>
        </div>
     : <h1> No Book Found In Your Read Shelf</h1> }
           
            {/* {this.state.selectValue.fn}
        <select value={this.state.selectValue}
             onChange={(e)=> { this.selectHandler(e.target.value)} } >
                <option></option>
        </select> */}
        </div>
    )
}
 }

export default ReadState