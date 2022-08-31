import { Switch, Route, Redirect } from 'wouter';
import LoginIndex from './pages/login/LoginIndex';
import Feed from './pages/feed/Feed';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route component={LoginIndex} path='/' />
        <Route component={Feed} path='/feed' />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
