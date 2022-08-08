import Intro from './components/intro/Intro'
import About from './components/intro/about/About'
import Nav from './components/intro/nav/Nav'
import ProductList from './components/intro/productList/ProductList'
import Experience from './components/intro/experience/Experience'
import Contact from './components/intro/contact/Contact'
import Footer from './components/intro/footer/Footer'


const App = () => {
  return (
    <div>
      <Nav/>
      <Intro/>
      <About/>
      <ProductList/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App