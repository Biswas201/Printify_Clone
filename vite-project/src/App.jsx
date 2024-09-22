import Footer from './components/Footer';
import HomeFour from './components/HomeFour';
import HomeThree from './components/HomeThree';
import Hometwo from './components/Hometwo';
import Navbar from './components/Navbar';
import HomeSection from './components/homesection';

function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <HomeSection/>
        <Hometwo/>
        <HomeThree/>
        <HomeFour/>
        <Footer/>
      </div>
    </>
  )
}

export default App
