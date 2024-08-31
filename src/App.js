import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import './styles/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header>
      <h1>Country Info Application</h1>
      </header>
      <div className="search-container">
        <CountrySearch />
      </div>
      <main className="content">
        <CountryList />
        <CountryDetail />
      </main>
    </div>
    </Provider>
  );
}

export default App;
