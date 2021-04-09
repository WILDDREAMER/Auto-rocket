import Input from '../input'
import Product from '../product/'
export default function Products({ category, dark }) {
    return (
        <div className='products'>
            <Input dark={dark} placeHolder='Search parts'></Input>
            
            <div className='productsList'>
                <Product product={category.products[0]}></Product>
                <Product product={category.products[1]}></Product>
                <Product product={category.products[2]}></Product>
                <Product product={category.products[3]}></Product>
            </div>
        </div>
    )
}