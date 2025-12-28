import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';

import { Routes, Route, Link } from 'react-router-dom';
import MenuAppBar from './components/AppBar/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <MenuAppBar />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
