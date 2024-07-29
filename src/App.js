import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={<div className="app-u">
            <Sidebar/>
            <SearchPage/>
          </div>} />
          <Route path="/" element={
            <div className="app-u">
              <Sidebar />
              <RecommendedVideo />
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
