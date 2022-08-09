import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';


function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={
          <HomePage/>
          }/>
           <Route path='/login' element={
            <LoginPage/>
          }/>
           <Route path='/menu' element={
            <MenuPage/>
          }/>
          <Route path='/menus' element={
            <Navigate replace to="/menu"/>
          }/>
          <Route path='/users/:id' element={
            <UserPage/>
          }/>
          <Route path='/dashboard/*' element={<Dashboard/>}>
            <Route path='welcome' element={<p>Welcome!!</p>}></Route>
            <Route path='goodbye' element={<p>Goodbye!!</p>}></Route>
          </Route>
          <Route path='*' element={
            <NotFoundPage/>
          }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
