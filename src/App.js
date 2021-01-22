import Home from './Home';
import Create from './Create'

import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetatails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
         <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetatails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div> 
    </Router>

  );
}

export default App;
