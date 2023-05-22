import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import CashBack from './Components/CashBack';
import Font from './Components/Font';
import PopularProducts from './Components/PopularProducts';

function App() {
  return (
    <div style={{ backgroundColor: '#F2F9F9' }}>
      <SearchBar></SearchBar>
      <CashBack></CashBack>
      <Font></Font>
      <PopularProducts></PopularProducts>

    </div>
  );
}

export default App;
