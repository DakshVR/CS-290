
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ItemsPage from './ItemsPage';
import StoresPage from './StoresPage';
import items from './data/items';
import stores from './data/stores';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="body">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/items">
            <ItemsPage items={items}></ItemsPage>
          </Route>
          <Route path="/stores">
            <StoresPage stores={stores}></StoresPage>
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
