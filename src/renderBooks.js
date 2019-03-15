import * as React from 'react'
//eslint-disable-next-line
import * as mui from 'material-ui'
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info'

class RenderBooks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectvalue: '',
            arr: [],
            open: false,
            error: false,
        }
    }

    handleClose = () => {
        this.setState({ open: false, error: false });
        this.forceUpdate();
    };
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


    componentWillReceiveProps(props) {
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
    currStateHandler() {
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
        let getArrOfObject = JSON.parse(localStorage.getItem('currState')) || [];
        //    let length = getArrOfObject.length;
        //    let uniqueArr = []
        var filtered = getArrOfObject.filter((e) => {
            return e.bookId === currUser.bookId
            console.log(currUser.bookId)
        }).length;
        if (!filtered) {
            getArrOfObject.push(currUser)
            localStorage.setItem('currState', JSON.stringify(getArrOfObject));
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
        //    console.log(length   )
        //    getArrOfObject.push(currUser)

    }
    wantStateHandler(e) {
        const wantUser = {
            selectvalue: 1,
            images: this.props.images,
            title: this.props.title,
            publisher: this.props.publisher,
            publishedDate: this.props.publishedDate,
            bookId: this.props.id,
        }
        // const arr= []
        // localStorage.setItem('readState', JSON.stringify(readUser));        // return arr
        var getArrOfObject = JSON.parse(localStorage.getItem('wantState')) || [];

        var filtered = getArrOfObject.filter((e) => {
            return e.bookId === wantUser.bookId
            console.log(wantUser.bookId)
        }).length;
        if (!filtered) {
            getArrOfObject.push(wantUser)
            localStorage.setItem('wantState', JSON.stringify(getArrOfObject));
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

    readStateHandler(e) {

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
        var getArrOfObject = JSON.parse(localStorage.getItem('readState')) || [];

        // Checking there is bokk exist already or not
        //    
        var filtered = getArrOfObject.filter((e) => {
            return e.bookId === readUser.bookId
        }).length;
        if (!filtered) {
            getArrOfObject.push(readUser)
            localStorage.setItem('readState', JSON.stringify(getArrOfObject));
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
        const actions = <mui.FlatButton
            label="Ok"
            primary={true}
            onClick={this.handleClose} />
        // const { images } = this.props
        return (
            <div>
                {this.props.id && this.props.title || this.props.publishedDate || this.props.publisher || this.props.images ? // ye is liye karna para q ky baad men id chahye thi or kisi kisi book men id nahi thi 
                    <div>
                        <List style={{ float: 'left' }} >
                            <ListItem > <img src={this.props.images} width='160' height='260' /> </ListItem>
                        </List>
                        <Divider />
                        <List  >
                            <ListItem value={1} secondaryText={this.props.title} primaryText="Title" rightIcon={<ActionInfo />} />
                            <ListItem value={2} secondaryText={this.props.publisher} primaryText="Publisher" rightIcon={<ActionInfo />} />
                            <ListItem value={3} secondaryText={this.props.publishedDate} primaryText="Published date" rightIcon={<ActionInfo />} />
                            <ListItem value={4} secondaryText={this.props.id} primaryText="Book Id" rightIcon={<ActionInfo />} />
                        </List>
                        <Divider />
                        <ListItem value={1}
                            nestedItems={[
                                <ListItem
                                    value={2}
                                    primaryText="Current Read Shelf"
                                    onClick={this.currStateHandler.bind(this)} // yahan sy id bhej rahy onclick event k call hony par
                                />,
                                <ListItem
                                    value={2}
                                    primaryText="Want To Read Shelf"
                                    onClick={this.wantStateHandler.bind(this)} // yahan sy id bhej rahy onclick event k call hony par
                                />,
                                <ListItem
                                    value={2}
                                    primaryText="Read Shelf"
                                    onClick={this.readStateHandler.bind(this)} />, // yahan sy id bhej rahy onclick event k call hony par


                            ]}
                            primaryText="Want to Add In Book Shelf..?" />
                        <br />  <hr style={{ border: '1px solid black' }} />
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
                    </div>
                    :
                    <div class="alert alert-danger" style={{ marginTop: '25vw', textAlign: 'center' }} role="alert">
                        <i class="fa fa-exclamation-triangle"></i> No Book Found Search from Above
                     </div>}
            </div >
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