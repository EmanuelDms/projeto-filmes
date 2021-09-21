import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Error from './pages/Error';
import Filme from './pages/Filme';

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route exact path="/filme/:id" component={Filme} />

        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
