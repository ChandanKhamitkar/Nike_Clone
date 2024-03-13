import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import SignInJoinUs from './pages/Login/SignInJoinUs.jsx'
import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Products from './pages/Search/Products.jsx';
import Shop from "./pages/shopping/Shop.jsx";
import Bag from './pages/Bag/Bag.jsx';
import Favourite from './pages/Favourites/Favourite.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import OrderPlaced from './pages/OrderPlace/OrderPlaced.jsx';


function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index  element={<SignInJoinUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin"  element={<SignInJoinUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/orderplaced' element={<OrderPlaced />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;