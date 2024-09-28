import { Outlet} from 'react-router-dom'
import './App.css'
import Header from './components/NavBar/Navbar'
import NavBarSlider from './components/NavSlider/NavBarSlider'
import Footer from './components/Footer/Footer'

 
function App() {

    return (
      <>
        <Header />
        <NavBarSlider/>
        <Outlet />
        <Footer />
      </>
    );
  };

export default App
