import { colors, radius } from '../../data/aftermarket'
import arrowThickBlack from '../../data/images/arrowThickBlack.svg'
import arrowThick from '../../data/images/arrowThick.svg'

export default function CategoryCard({ category }) {
    const styling = {
        background: category.color,
        borderRadius: radius,
        color: category.textColor,
    }
    return (
        <div className='categoryCard' style={styling}>
            <img className='image'
                src={category.image}
                style={{ filter: category.imgShadow, top: category.imgPosition.top, left: category.imgPosition.left }}
                alt=""
            />
            <p className='title'>{category.title}</p>
            <p className='subtitle'>{category.subTitle}</p>
            <p className='price'>${category.price}</p>
            <img className='arrow' src={(category.textColor === '#FFFFFF') ? arrowThick : arrowThickBlack} alt="" />
        </div>
    )
}