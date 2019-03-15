import * as React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './home'
import BookShelf from './bookShelf'

 class Routes extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        {/* <Route path='/bookShelf' exact component={BookShelf} /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes