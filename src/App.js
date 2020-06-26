import React from 'react';
import { Switch,BrowserRouter } from 'react-router-dom'
import WrapperRoute from './Layout'
import HomeLayout from './Layout/HomeLayout'
import Content from './Components/Content'
import Home from './Pages/Home'


function App() {
  return (

    <div className="body">
      <BrowserRouter>
      <Switch>
        <WrapperRoute path="/" layout={HomeLayout} component={Home} />
      </Switch>
      </BrowserRouter>
    </div>


  );
}

export default App;
