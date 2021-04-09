import {radius, colors} from '../../data/global'
import rateDisplay from '../rate-display';

export default function Product({product, dark}) {
    const styling = (dark) ? {borderRadius: radius, backgroundColor: colors.dark.product, color: colors.dark.text} : {borderRadius: radius, backgroundColor: colors.light.product, color: colors.light.text};
    return(
        <div className='product' style={styling}>
            <div className='image'>
            <img src={product.image} alt="" />
            </div>
            <div className='infos'>
                <p className='title'>{product.title}</p>
                <p className='price'>${product.price}</p>
                <div className='reviewsContainer'>
                    {rateDisplay('rate', 4)}
                    <p className='reviews'>{product.reviews} Reviews</p>
                </div>
            </div>
        </div>
    )
}