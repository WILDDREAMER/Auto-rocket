import React from 'react'

import Regular from "../../assets/images/regular.svg"
import Premium from "../../assets/images/premium.svg"
import Diesel from "../../assets/images/diesel.svg"
import rateDisplay from "../rate-display"

import { colors } from "../../data/list"

export default function CarCard(props) {
    const textStyling = (props.dark) ? { color: colors.textDark } : { color: colors.textLigh };
    const cardListStyling = (props.dark) ? { background: '#323338' } :  { color: colors.textLigh };

    function Type() {
        if (props.type === "premium")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Premium} alt="" />
                        <p className='fuel-type' style={textStyling}>Premium Petrol</p>
                    </div>
                </div>
            )
        else if (props.type === "diesel")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Diesel} alt="" />
                        <p className='fuel-type' style={textStyling}>Diesel</p>
                    </div>
                </div>
            )
        else if (props.type === "regular")
            return (
                <div className='text-field' >
                    <p className='infos' style={textStyling}>Fuel type:</p>
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
        <div className='carCard' style={cardListStyling}>
            <img src={props.img} alt="" />
            <div className='text-field title'>
                <p className='car-name' style={textStyling}>{props.title}</p>
                <p className='price' >${props.subtitle}</p>
            </div>
            <Type></Type>
            <div className='text-field'>
                <p className='infos' style={textStyling}>Green Rating:</p>
                {rateDisplay("green", props)}
            </div>
            <div className='text-field'>
                <p className='infos' style={textStyling}>Safety rating:</p>
                {rateDisplay("safety", props)}
            </div>
        </div>
    )
}