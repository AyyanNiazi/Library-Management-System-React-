import * as React from 'react'
//eslint-disable-next-line
import * as mui from 'material-ui'
// import MobileTearSheet from '../../../MobileTearSheet';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

class ReadState extends React.Component {
    constructor(props) {
        let storageValue = JSON.parse(localStorage.getItem('readState'));
        //  let byKey = localStorage.getItem('selectValue')
        super(props);
        this.state = {
            selectValue: storageValue,
            initial: false,
            bookId: false,
            open: false,
            error: false
            // byKey: byKey
        }
        //  console.log(storageValue.length)
    }
    handleClose = () => {
        this.setState({ open: false, error: false });
        this.forceUpdate();
    };
    componentDidMount = () => {
        //     this.setState({
        //          books: JSON.parse(localStorage.getItem('books'))
        //    })
        console.log(this.state.selectValue, "ls")
        //    return true
    }

    wantToRead = (bookId) => {
        var counter = []
        var key = bookId
        // this.setState({
        //     initial: key
        // })
        const getarrayReadState = undefined
        // alert('clicked')
        let getarray = JSON.parse(localStorage.getItem('readState')) || [];
        let getarrayWant = JSON.parse(localStorage.getItem('wantState')) || [];
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


        console.log(getarray, "upper wala arr", "splice arry", filterArr[0])


        var filtered = getarrayWant.filter((e) => { // yahn py check hoga ky book want shelf men exist krti hy ya nahi
            return e.bookId === key
        }).length;
        // var finalFiltered = filterArr && filtered
        if (!filtered) {
            getarrayWant.push(filterArr[0])
            localStorage.setItem('wantState', JSON.stringify(getarrayWant));
            localStorage.setItem('currState', JSON.stringify(getarray));        // return arr
            this.setState({ open: true });
            console.log(getarray, key, getarrayWant)
            // yahan py agar same na hui id tu jay ga warna nahi
            console.log('running')      // return arr
        }
        else {
            console.log('enter already');
            this.setState({
                error: true
            })
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
        console.log(key, "want state removers")
        // console.log(this.state.initial   , "orignal state removers")

        // this.useForceUpdate() // ye component ko refresh krny k liye hy
        // this.props.history.push('/')

    }

    currRead = (bookId) => {
        var counter = []
        var key = bookId
        // this.setState({
        //     initial: key
        // })
        const getarrayReadState = undefined
        // alert('clicked')
        let getarray = JSON.parse(localStorage.getItem('readState')) || [];
        let getarrayCurr = JSON.parse(localStorage.getItem('currState')) || [];
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


        console.log(getarray, "upper wala arr", "splice arry", filterArr[0])

        // Checking there is book exist already or not
        //curr state ki id check hogi
        var filtered = getarrayCurr.filter((e) => {
            return e.bookId === key
        }).length;
        // var finalFiltered = filterArr && filtered
        if (!filtered) {
            getarrayCurr.push(filterArr[0])
            localStorage.setItem('currState', JSON.stringify(getarrayCurr));
            localStorage.setItem('readState', JSON.stringify(getarray));        // return arr

            // yahan py agar same na hui id tu jay ga warna nahi
            console.log('running')      // return arr
        }
        else {
            console.log('enter already');
            this.setState({
                error: true
            })
        }
        // getarray.forEach(function(obj) {
        //     for (index in obj){
        //         console.log(getarray[index] + getarray[value]);
        // 	    }
        // });
        // if(arr){

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
    }

    store = (bookId) => {
        var counter = []
        var key = bookId
        // this.setState({
        //     initial: key
        // })
        const getarrayReadState = undefined
        // alert('clicked')
        let getarray = JSON.parse(localStorage.getItem('readState')) || [];
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

        localStorage.setItem('readState', JSON.stringify(getarray));        // return arr
        this.setState({
            open: true
        })
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
        console.log(key, "want state removers")
    }


    render() {
        const { selectValue } = this.state;
        const actions = <mui.FlatButton
            label="Ok"
            primary={true}
            onClick={this.handleClose}
        />
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
                        <div class="alert alert-info" role="alert" style={{ textAlign: 'center', fontSize: '1.92em', fontWeight: '700', }} >
                            Available Books in Read Book Shelf
          </div>
                        <ul> {selectValue.map((val, i) => {
                            //    return val.map((val,i)=>{
                            return (
                                <div key={i}>
                                    <List style={{ float: 'left' }} >
                                        <ListItem > <img src={val.images} width='160' height='260' /> </ListItem>
                                    </List>
                                    <Divider />
                                    <List  >
                                        <ListItem secondaryText="Book Image" value={1} secondaryText={val.title} primaryText="Title" rightIcon={<ActionInfo />} />
                                        <ListItem value={2} secondaryText={val.publisher} primaryText="Publisher" rightIcon={<ActionInfo />} />
                                        <ListItem value={3} secondaryText={val.publishedDate} primaryText="Published date" rightIcon={<ActionInfo />} />
                                        <ListItem value={4} secondaryText={val.bookId} primaryText="Book Id" rightIcon={<ActionInfo />} />
                                    </List>
                                    <Divider />
                                    <ListItem value={1}
                                        nestedItems={[
                                            <ListItem
                                                value={2}
                                                primaryText="Want To Read Shelf"
                                                onClick={this.wantToRead.bind(this, val.bookId)}
                                            />,
                                            <ListItem
                                                value={2}
                                                primaryText="Current Read Shelf"
                                                onClick={this.currRead.bind(this, val.bookId)} />,
                                            <ListItem
                                                value={this.state.bookId === true}
                                                primaryText="Store"
                                                onClick={this.store.bind(this, val.bookId)}
                                            />
                                            ,
                                        ]}
                                        primaryText="Want to Change Book Shelf..?" />
                                    <br />  <hr style={{ border: '1px solid black' }} />
                                </div>
                            )
                        })} </ul>
                        <mui.Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                           <span style={{ color: 'green' }}>   Your Book Succesfully Added In Selected Shelf</span>
                       </mui.Dialog>
                        <mui.Dialog
                            actions={actions}
                            modal={false}
                            open={this.state.error}
                            onRequestClose={this.handleClose}>
                            <span style={{ color: 'red' }}>  <i class="fa fa-exclamation-circle"></i> Sorry error occur May be you already entered this book in selected shelf </span>
                        </mui.Dialog>
                    </div> :
                    <div class="alert alert-danger" style={{ marginTop: '25vw', textAlign: 'center' }} role="alert">
                        <i class="fa fa-exclamation-triangle"></i> No Book Found In Read Shelf
        </div>
            /* {this.state.selectValue.fn}
        <select value={this.state.selectValue}
             onChange={(e)=> { this.selectHandler(e.target.value)} } >
                <option></option>
        </select> */}
            </div>
        )
    }
}

export default ReadState