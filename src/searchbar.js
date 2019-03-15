import * as React from 'react'
//eslint-disable-next-line
import * as mui from 'material-ui'
import { Tabs, Tab } from 'material-ui/Tabs';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from 'material-ui/TextField'; import './form.css'
import './form.css'

const Searchbar = (props) => {
    const { serachBar, bookSearchHandler } = props
    return (
        <div>
            <Tabs  >
                <Tab  style={{ top: '0',position: 'fixed' }} label="E-Book STORE" style={{ fontWeight: '700', fontSize: '1.3em' }}>
                 
                </Tab>
               
            </Tabs>
            <form className='input-field' onSubmit={props.bookSearchHandler} >
                  <TextField  placeholder=""
                    margin="normal"
                    fullWidth={true}
                    value={props.serachBar}
                    floatingLabelText="Search Book Here" onChange={props.inputHandler} />
                {/* <input onChange={props.inputHandler} />  */}
                <mui.RaisedButton type='submit' label="Submit" primary={true} style={{marginLeft: '90%', }}  />

                {/* <input type='submit' value='Submit' /> */}
            </form>
        </div>
    )
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 1000,
    },
   
})
const style = {
    margin: 12,
  };
export default Searchbar