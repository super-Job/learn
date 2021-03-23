import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from '@/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {
            routes.map(route => {
              const { Comp, path, exact } = route;
              return (
                <Route key={path} exact={exact} path={path}>
                  <Comp />
                </Route>
              )
            })
          }
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
