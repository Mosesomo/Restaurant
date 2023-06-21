import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Menu from "./Components/Menu"
import Quote from "./Components/Quote"
import Intro from "./Components/Intro"
import Laurels from "./Components/Laurels"
import Gallary from "./Components/Gallary"
import Findus from "./Components/Findus"
import Footer from "./Components/Footer"

const App = () =>{
  return(
    <div className="w-[100%] h-full bg-[url('./assets/bg.png')] bg-cover bg-center text-white">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Quote />
      <Intro />
      <Laurels />
      <Gallary />
      <Findus />
      <Footer />
    </div>
  )
}
export default App