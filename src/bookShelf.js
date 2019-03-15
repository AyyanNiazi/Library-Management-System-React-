import * as React from 'react'
import * as mui from 'material-ui'
// import Tab from 'material-ui/Tab';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider'
import WantToRead from './shelf/wantToRead'
import CurrState from './shelf/currState';
import ReadState from './shelf/readState';

class BookShelf extends React.Component {



  render() {
    const contentStyle = { margin: '0 16px' };
    console.log("shelf props")

    return (
      <div>

        <Tabs style={{ top: '0' }} >
          <Tab label="SHELF 1"   style={{ fontWeight: '700', fontSize: '1.3em' }} >
            <div>
              {/* <h2 style={styles.headline} style={{ textAlign: 'center' }} >Current Read </h2> */}
              <p>
                <CurrState className='col-4' />
              </p>
            </div>
          </Tab>
            <mui.Divider inset={true} />
            <Tab label="SHELF 2" style={{ fontWeight: '700', fontSize: '1.3em' }} >
              <div  >
                {/* <h2 style={styles.headline} style={{ textAlign: 'center' }} >Want to Read </h2> */}
                <p>
                  <WantToRead class='col-4' />;
                      </p>
              </div>
            </Tab>
            <mui.Divider inset={true} />
            <Tab label="SHELF 3" style={{ fontWeight: '700', fontSize: '1.3em' }} >
              <div>
                {/* <h2 style={styles.headline}  style={{ textAlign: 'center' }} >Read</h2> */}
                <p>
                  <ReadState className='col-4' />;
                </p>
              </div>
            </Tab>
        </Tabs>
      </div>
        )
      }
    }
    
const styles = {
          headline: {
          fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
export default BookShelf