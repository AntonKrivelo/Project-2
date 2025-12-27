import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
