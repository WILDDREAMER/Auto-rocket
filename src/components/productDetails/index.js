import { Button } from "react-bootstrap";
import rateDisplay from "../rate-display";

export function ProductDetails({ product }) {
	return (
		<div className='productDetails'>
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
							<div className={(index % 2 === 0)? 'row color':'row'}>
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