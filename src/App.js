import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Test1 from './components/Test1';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route exact path='' element={Home()} />
        <Route exact path='/test1' element={Test1()} />
      </Routes>
    </main>
  );
}

export default App;
