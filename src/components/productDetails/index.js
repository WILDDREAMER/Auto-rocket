import { Button } from "react-bootstrap";
import rateDisplay from "../rate-display";
import { colors } from '../../data/global'

export function ProductDetails({ product, dark }) {
	const styling = (dark)
		?
		{ backgroundColor: colors.dark.background, color: colors.dark.text }
		:
		{ backgroundColor: 'white', color: colors.light.text }

	return (
		<div className='productDetails' style={styling}>
			<div className='image'><img src={product.image} alt="" /></div>
			<div className='infos'>
				<p className='title'>{product.title}</p>
				<p className='price'>${product.price}</p>
				<div className='rateAndId'>
					{rateDisplay('rate', product.rate)}
					<p className='reviews' >{product.reviews} Reviews</p>
					<p className='id'>#{product.id}</p>
				</div>
				<p className='description'>{product.description}</p>
				<Button>Order Now</Button>
			</div>
			<div className='details'>
				<p className='detailsTitle'>Detailed Specifications</p>
				{
					product.details.map((detail, index) => {
						return (
							<div className='detail' style={{
								backgroundColor: (index % 2 === 0)
									? ((dark) ? '#38393F' : '#F2F2F2') : 'transparent'
							}}>
								<p>{detail.title}</p>
								<p className='content'>{detail.content}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}