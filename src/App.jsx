import { Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import NavBarSlider from './components/NavSlider/NavBarSlider'
import Footer from './components/Footer/Footer'

 
function App() {

    return (
      <>
        <Navbar />
        <NavBarSlider/>
        <Outlet />
        <Footer />
      </>
    );
  };

export default App
