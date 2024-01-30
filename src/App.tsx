import './styles/App.css'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu selectedCategory="Criollo"/>} />
        <Route path='/menu/criollo' element={<Menu selectedCategory="Criollo"/>} />
        <Route path='/menu/piqueos' element={<Menu selectedCategory="Piqueos"/>} />
        <Route path='/menu/makis' element={<Menu selectedCategory="Makis"/>} />
        <Route path='/menu/bebidas' element={<Menu selectedCategory="Bebidas"/>} />
        <Route path='/menu/promociones' element={<Menu selectedCategory="Promociones"/>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
