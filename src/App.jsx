// import React from 'react'

import Contact from './components/intro/contact/Contact'
import About from './components/intro/about/About'
import Intro from './components/intro/Intro'
import ProductList from './components/intro/productList/ProductList'

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default App