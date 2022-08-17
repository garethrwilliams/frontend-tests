import Nav from './components/Nav';
import Home from './components/Home';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route exact path='' element={Home()} />
        <Route exact path='/test1' element={Test1()} />
        <Route exact path='/test2' element={Test2()} />
        <Route exact path='/test3' element={Test3()} />
      </Routes>
    </main>
  );
}

export default App;
