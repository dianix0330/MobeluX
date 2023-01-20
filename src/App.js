import { MainPage } from './pages';
import Header from './components/Header/Header';
import { useFetch } from "./hooks";
import './App.css';

function App() {
  const { loading, data, error } = useFetch(process.env.REACT_APP_ALBUM_URL);
  
  if (loading) {
    return (
      <div className="App">
        <div className="loader"></div>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
