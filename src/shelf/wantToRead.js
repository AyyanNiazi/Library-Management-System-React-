import * as React from 'react'
// import * as mui from 'material-ui'
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

class WantToRead extends React.Component {
  constructor(props) {
    let storageValue = JSON.parse(localStorage.getItem('wantState'));
    super(props);
    this.state = {
      selectValue: storageValue,
    }
    console.log(storageValue, "const want")
  }


  currRead = (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    // let getarray = JSON.parse(localStorage.getItem('currState')) || [] ;

    // getarrayRead.push(filterArr[0]) 
    // localStorage.setItem('readState', JSON.stringify(getarrayRead)); 

    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('wantState')) || [];
    let getarrayCurr = JSON.parse(localStorage.getItem('currState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)

    // !** checking book exist and send particular book to selected shelf and also delete it to current Shelf **!!

    const filterArr = getarray.filter((e) => {
      if (e.bookId === key) {
        return true
      }
    })
    filterArr.forEach((element) => {
      getarray.splice(getarray.findIndex(f =>
        f.bookId === element.bookId), 1)

    });

    console.log(getarray, "upper wala arr", "splice arry", filterArr[0])

    // arr.splice(arr.findIndex(e => e.bookId === key), 1)
    console.log(getarray, key, getarrayCurr)
    // }
    // else{
    //     console.log('not wroking')
    // }
    // return arr
    // const filterItem = getarray.filter((getarray)=>{
    //     return getarray !== removeVal
    // })
    console.log(key, "want state removers")



    // Checking there is bokk exist already or not
    //read state ki id check hogi
    var filtered = getarrayCurr.filter((e) => {
      return e.bookId === key
    }).length;
    // var finalFiltered = filterArr && filtered
    if (!filtered) {
      getarrayCurr.push(filterArr[0])
      localStorage.setItem('readState', JSON.stringify(getarrayCurr));
      localStorage.setItem('wantState', JSON.stringify(getarray));
      // yahan py agar same na hui id tu jay ga warna nahi
      console.log('running')      // return arr
    }
    else {
      console.log('enter already');
      alert('You already Entered This Book In Current Read Shelf ')
    }
  }

  read = (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    // let getarray = JSON.parse(localStorage.getItem('currState')) || [] ;

    // getarrayRead.push(filterArr[0]) 
    // localStorage.setItem('readState', JSON.stringify(getarrayRead)); 

    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('wantState')) || [];
    let getarrayRead = JSON.parse(localStorage.getItem('readState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)

    // !** checking book exist and send particular book to selected shelf and also delete it to current Shelf **!!

    const filterArr = getarray.filter((e) => {
      if (e.bookId === key) {
        return true
      }
    })
    filterArr.forEach((element) => {
      getarray.splice(getarray.findIndex(f =>
        f.bookId === element.bookId), 1)

    });

    console.log(getarray, "upper wala arr", "splice arry", filterArr[0])



    // arr.splice(arr.findIndex(e => e.bookId === key), 1)
    console.log(getarray, key, getarrayRead)
    // }
    // else{
    //     console.log('not wroking')
    // }
    // return arr
    // const filterItem = getarray.filter((getarray)=>{
    //     return getarray !== removeVal
    // })
    console.log(key, "want state removers")



    // Checking there is bokk exist already or not
    //read state ki id check hogi
    var filtered = getarrayRead.filter((e) => {
      return e.bookId === key
    }).length;
    // var finalFiltered = filterArr && filtered
    if (!filtered) {
      getarrayRead.push(filterArr[0])
      localStorage.setItem('readState', JSON.stringify(getarrayRead));
      localStorage.setItem('currState', JSON.stringify(getarray));
      // yahan py agar same na hui id tu jay ga warna nahi
      console.log('running')      // return arr
    }
    else {
      console.log('enter already');
      alert('You already Entered This Book In Read Shelf ')
    }
  }

  store = (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    const getarrayReadState = undefined
    // alert('clicked')
    let getarray = JSON.parse(localStorage.getItem('wantState')) || [];
    // let getarrayWant = JSON.parse(localStorage.getItem('wantState')) || [];
    // let getarrayReadState = JSON.parse(localStorage.getItem('readState'));
    // var index = counter.inderOf(1);
    // getarray = getarray.splice(i,0)
    // const arr = []
    // const id = Object.keys(getarray)

    const filterArr = getarray.filter((e) => {
      if (e.bookId === key) {
        return true
      }
    })
    filterArr.forEach((element) => {
      getarray.splice(getarray.findIndex(f =>
        f.bookId === element.bookId), 1)

    });

  }
  render() {
    const { selectValue } = this.state
    return (
      <div>
        {/* <h1>  Want To Read Books </h1> */}

        {selectValue ? <div>

          <ul> {selectValue.map((val, i) => {
            //    return val.map((val,i)=>{
            return (
              <div key={i}  >
                <List style={{ float: 'left' }} >
                  <ListItem > <img src={val.images} /> </ListItem>
                </List>
                <Divider />
                <List  >
                  <ListItem secondaryText="Book Image" value={1} secondaryText={val.title} primaryText="Title" rightIcon={<ActionInfo />} />
                  <ListItem value={2} secondaryText={val.publisher} primaryText="Publisher" rightIcon={<ActionInfo />} />
                  <ListItem value={3} secondaryText={val.publishedDate} primaryText="Published date" rightIcon={<ActionInfo />} />
                  <ListItem value={4} secondaryText={val.bookId} primaryText="Published date" rightIcon={<ActionInfo />} />
                </List>
                <Divider />
                <ListItem value={1}
                  nestedItems={[
                    <ListItem
                      value={2}
                      primaryText="current Read Shelf"
                      onClick={this.currRead.bind(this, val.bookId)} // yahan sy id bhej rahy onclick event k call hony par
                    />,
                    <ListItem
                      value={2}
                      primaryText="Read Shelf"
                      onClick={this.read.bind(this, val.bookId)} />, // yahan sy id bhej rahy onclick event k call hony par
                    <ListItem
                      value={2}
                      primaryText="Store"
                      onClick={this.store.bind(this, val.bookId)} // yahan sy id bhej rahy onclick event k call hony par
                    />
                    ,
                  ]}
                  primaryText="Want to Change Book Shelf..?" />
                <br />  <hr style={{ border: '1px solid black' }} />
              </div>
            )
          })} </ul></div>
          :
          <h1> No Book Found In your Want to Read Shelf</h1>}

        {/* {selectValue.map((v,i)=>{
          // return v.map((val,ind)=>{
            return ( 
            <li>  {v.title}  </li>
            )
          // })
        })} */}
      </div>
    )
  }
}

export default WantToRead