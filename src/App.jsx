// import React from 'react'

import Contact from './components/intro/contact/Contact'
import About from './components/intro/about/About'
import Intro from './components/intro/Intro'
import ProductList from './components/intro/productList/ProductList'
import Footer from './components/intro/footer/Footer'


const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App