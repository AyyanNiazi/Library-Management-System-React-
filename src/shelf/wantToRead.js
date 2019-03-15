import * as React from 'react'
//eslint-disable-next-line
import * as mui from 'material-ui'
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { Card } from 'material-ui';


class WantToRead extends React.Component {
  constructor(props) {
    let storageValue = JSON.parse(localStorage.getItem('wantState'));
    super(props);
    this.state = {
      selectValue: storageValue,
      update: false,
      open: false,
      error: false,
    }
    console.log(storageValue, "const want")
  }

  handleClose = () => {
    this.setState({ open: false, error: false });
    this.forceUpdate();
  };

  currRead = (bookId) => {
    var counter = []
    var key = bookId
    // this.setState({
    //     initial: key
    // })
    // let getarray = JSON.parse(localStorage.getItem('currState')) || [] ;

    // getarrayRead.push(filterArr[0]) 
    // localStorage.setItem('readState', JSON.stringify(getarrayRead)); 
    this.setState({
      update: true
    })
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
      this.setState({
        open: true
      })
    }
    else {
      console.log('enter already');
      this.setState({
        error: true
      })
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
      this.setState({
        open: true
      })
      console.log('running')      // return arr
    }
    else {
      console.log('enter already');
      this.setState({
        error: true
      })
    }
  }

  // Store Starting

  store = (bookId) => {
    var counter = []
    var key = bookId

    let getarray = JSON.parse(localStorage.getItem('wantState')) || [];

    const filterArr = getarray.filter((e) => {
      if (e.bookId === key) {
        return true
      }
    })
    filterArr.forEach((element) => {
      getarray.splice(getarray.findIndex(f =>
        f.bookId === element.bookId), 1)

    });
    localStorage.setItem('wantState', JSON.stringify(getarray));        // return arr

    this.setState({
      open: true
    })

  }

  render() {
    const { selectValue } = this.state
    const actions = <mui.FlatButton
      label="Ok"
      primary={true}
      onClick={this.handleClose}
    />
    return (
      <div>
        {/* <h1>  Want To Read Books </h1> */}

        {selectValue ? <div>
          <div class="alert alert-info" role="alert" style={{ textAlign: 'center', fontSize: '1.92em', fontWeight: '700', }} >
          Available Books In Want To Read Book Shelf
          </div>
          <ul> {selectValue.map((val, i) => {
            //    return val.map((val,i)=>{
            return (
              <div key={i}  >
                <List style={{ float: 'left' }} >
                  <ListItem > <img src={val.images} width='160' height='260' /> </ListItem>
                </List>
                <Divider />
                <List  >
                  <ListItem value={1} secondaryText={val.title} primaryText="Title" rightIcon={<ActionInfo />} />
                  <ListItem value={2} secondaryText={val.publisher} primaryText="Publisher" rightIcon={<ActionInfo />} />
                  <ListItem value={3} secondaryText={val.publishedDate} primaryText="Published date" rightIcon={<ActionInfo />} />
                  <ListItem value={4} secondaryText={val.bookId} primaryText="Book Id" rightIcon={<ActionInfo />} />
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
                      value={this.state.update}
                      primaryText="Store"
                      onClick={this.store.bind(this, val.bookId)} // yahan sy id bhej rahy onclick event k call hony par
                    />
                    ,
                  ]}
                  primaryText="Want to Change Book Shelf..?" />
                <br />  <hr style={{ border: '1px solid black' }} />
              </div>
            )
          })}</ul>
        </div> :
          <div class="alert alert-danger" style={{ marginTop: '25vw', textAlign: 'center' }} role="alert">
            <i class="fa fa-exclamation-triangle"></i> No Book Found In Want To Read Shelf
        </div>}

        <mui.Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
       <span style={{color: 'green'}} >    Your Book Succesfully Added In Selected Shelf</span>
        </mui.Dialog>
        <mui.Dialog
          actions={actions}
          modal={false}
          open={this.state.error}
          onRequestClose={this.handleClose}>
          <span style={{color: 'red'}}>  <i class="fa fa-exclamation-circle"></i> Sorry error occur May be you already entered this book in selected shelf </span>
        </mui.Dialog>

      </div>
    )
  }
}

export default WantToRead