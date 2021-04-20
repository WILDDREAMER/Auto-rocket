import React, {useState} from 'react'

import Type from '../fuel'
import rateDisplay from "../rate-display"
import like from '../../data/images/Like.svg'
import redlike from '../../data/images/redlike.svg'
import feedback from '../../data/images/feedback.svg'
import { text } from "../../data/list"
import { radius, colors } from "../../data/global"

export default function CarCard({ dark, car, onClick }) {
    const textStyling = (dark) ? { color: colors.dark.text } : { color: colors.light.text };
    const cardListStyling = (dark) ? { background: colors.dark.card, borderRadius: radius } : { background: colors.light.card, color: colors.dark.text, borderRadius: radius };
    const [heart, setHeart] = useState(like);
    

    return (
        <div className='card' style={cardListStyling}>
            <img className='like' src={heart}  alt="" />
            <img className='image' src={car.img} alt="" onClick={() => setHeart(curr => (curr === like) ? redlike : like)}/>
            <div className='cont' onClick={onClick}>
                <div className='text-field title'>
                    <p className='title' style={textStyling}>{car.title}</p>
                    <p className='subtitle' >${car.subtitle}</p>
                </div>
                <p className='secondTitle' style={textStyling}>{car.secondTitle}</p>
                <Type car={car} dark={dark}></Type>
                <div className='text-field'>
                    <p className='infos' style={textStyling}>{text.card.info2}</p>
                    {rateDisplay("green", car.green)}
                </div>
                <div className='text-field'>
                    <p className='infos' style={textStyling}>{text.card.info3}</p>
                    {rateDisplay("safety", car.safety)}
                </div>
                <div className='feedback' style={{ width: '100%', borderRadius: radius, backgroundColor: (dark) ? colors.dark.semiCard : colors.light.semiCard }}>
                    <img src={feedback} alt="" />
                    {car.feedbacks[0].text}
                </div>
            </div>
        </div>
    )
}