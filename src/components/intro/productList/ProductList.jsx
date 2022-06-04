import './productList.css'
import Product from '../product/Product'
import { products } from '../../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Something Somthing Dark Side</h1>
            <br></br>
            <p className='pl-desc'>
            “Your eyes can deceive you, don’t trust them.” —  (A New Hope)
            <br></br>
            <br></br>
            “You’re asking me to be rational. That is something that I know I cannot do. Believe me, 
            <br></br>
            I wish I could just wish away my feelings, but I can’t.” — (Attack of the Clone Wars)
            </p>
        </div>
        <div className='pl-list'>
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
        </div>
    </div>
  )
}

export default ProductList