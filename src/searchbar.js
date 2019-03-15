import * as React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import './form.css'
const Searchbar = (props) => {
    const { serachBar, bookSearchHandler } = props
    return (
        <div>
            <Tabs style={{ top: '0' }} >
                <Tab label="E-Book STORE"  style={{fontWeight: '700', fontSize: '1.3em'}} >
                    <div>
                        {/* <h2 style={styles.headline}>Tab One</h2>
                <p>
                   This is an example tab.
                </p> */}
                        <p>
                            {/* <CurrState className='col-4' />   */}
                        </p>
                        {/* <Slider name="slider0" defaultValue={0.5} /> */}
                    </div>
                </Tab>
            </Tabs>
                <form className='input-field' onSubmit={props.bookSearchHandler} >
                    <TextField  hintText="React" fullWidth={true} value={props.serachBar}
                        floatingLabelText="Search Book Here" onChange={props.inputHandler} />
                    {/* <input onChange={props.inputHandler} />  */}
                    <br />
                    <input type='submit' value='Submit' />
                </form>
        </div>
            )
        }
export default Searchbar