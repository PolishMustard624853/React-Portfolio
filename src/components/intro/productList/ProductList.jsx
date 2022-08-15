import './productList.css'
import Product from '../product/Product'
import { products } from '../../../data'

const ProductList = () => {
  return (
    <section id='prod'>
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Collaborative Projects</h1>
            <br></br>
            <p className='pl-desc'>
          <h3>Not Financial Advice (left)</h3>
          <br></br>
          <h3>Big Bet Sports Club (right)</h3>
            <br></br>
            <br></br>
          <h3>Click on the images to see the projects!</h3>
            <br></br>
            <br></br>
            “Your eyes can deceive you, don’t trust them.”
            </p>
        </div>
        <div className='pl-list'>
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
    </section>
  )
}

export default ProductList