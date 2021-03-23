import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from '@/routes';
import BaseLayout from '@/layout/BaseLayout';
import './App.css';
import './init.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <BaseLayout>
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
          </BaseLayout>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
