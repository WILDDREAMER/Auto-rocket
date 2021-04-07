import Button from "../button/"
import arrow from "../../data/images/arrowThick.svg"
import {radius} from "../../data/tiles"
export default function TileCard(props) {
    return (
        <div className='tileCard' style={{background: props.article.color, borderRadius: radius}}>
            <img src={props.article.img} alt="" />
            <div className='text'>
                <p className='title' style={{color: props.article.textColor}}>{props.article.title}</p>
                <p className='subtitle year' style={{color: props.article.textColor}}>{props.article.subtitle}</p>
                <p className='subtitle price' style={{color: props.article.textColor}}>{props.article.price}</p>
                <div className='button' style={{color: props.article.textColor}}><img src={arrow} alt="" /></div>
            </div>
        </div>
    )
}