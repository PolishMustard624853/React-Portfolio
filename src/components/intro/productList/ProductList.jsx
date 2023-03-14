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
            “Your eyes can deceive you, don’t trust them.”
            </p>
            <br></br>
          <h3>*Not Financial Advice*
            <br></br>
            ∨ ∨            ∨  ∨
          </h3>
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