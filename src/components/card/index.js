import React from 'react'

import Regular from "../../data/images/regular.svg"
import Premium from "../../data/images/premium.svg"
import Diesel from "../../data/images/diesel.svg"
import rateDisplay from "../rate-display"

import { colors, text, radius } from "../../data/list"

export default function CarCard(props) {
    const textStyling = (props.dark) ? { color: colors.textDark } : { color: colors.textLigh };
    const cardListStyling = (props.dark) ? { background: '#323338' , borderRadius: radius } :  { color: colors.textLigh, borderRadius: radius };

    function Type() {
        if (props.type === "premium")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>{text.card.info1}</p>
                    <div className='fuel-container'>
                        <img src={Premium} alt="" />
                        <p className='fuel-type' style={textStyling}>Premium Petrol</p>
                    </div>
                </div>
            )
        else if (props.type === "diesel")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>{text.card.info1}</p>
                    <div className='fuel-container'>
                        <img src={Diesel} alt="" />
                        <p className='fuel-type' style={textStyling}>Diesel</p>
                    </div>
                </div>
            )
        else if (props.type === "regular")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>{text.card.info1}</p>
                    <div className='fuel-container'>
                        <img src={Regular} alt="" />
                        <p className='fuel-type' style={textStyling}>Regular Petrol</p>
                    </div>
                </div>
            )
        else {
            return <></>
        }
    }

    return (
        <div className='card' style={cardListStyling}>
            <img src={props.img} alt="" />
            <div className='text-field title'>
                <p className='title' style={textStyling}>{props.title}</p>
                <p className='subtitle' >${props.subtitle}</p>
            </div>
            <Type></Type>
            <div className='text-field'>
                <p className='infos' style={textStyling}>{text.card.info2}</p>
                {rateDisplay("green", props)}
            </div>
            <div className='text-field'>
                <p className='infos' style={textStyling}>{text.card.info3}</p>
                {rateDisplay("safety", props)}
            </div>
        </div>
    )
}