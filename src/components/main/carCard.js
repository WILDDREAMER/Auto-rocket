import React, { useState } from 'react'

import Regular from "../../assets/images/regular.svg"
import Premium from "../../assets/images/premium.svg"
import Diesel from "../../assets/images/diesel.svg"
import GreenEmpty from "../../assets/images/green-empty.svg"
import GreenFilled from "../../assets/images/green-filled.svg"
import SafetyEmpty from "../../assets/images/safety-empty.svg"
import SafetyFilled from "../../assets/images/safety-filled.svg"

export default function CarCard(props) {
    const rateRange = [0, 1, 2, 3, 4];

    function rateDisplay(params) {
        return (
            (params === "green") ?
                <div className='rate'>
                    {rateRange.map((value, index) => {
                        return <img src={(props.green > index) ? GreenFilled : GreenEmpty} alt="" />
                    })}
                </div>
                :
                <div className='rate'>
                    {rateRange.map((value, index) => {
                        return <img src={(props.safety > index) ? SafetyFilled : SafetyEmpty} alt="" />
                    })}
                </div>
        )
    }

    function Type() {
        if (props.type === "premium")
            return (
                <div className='text-field' >
                    <p className='infos'>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Premium} alt="" />
                        <p className='fuel-type'>Premium Petrol</p>
                    </div>
                </div>
            )
        else if (props.type === "diesel")
            return (
                <div className='text-field' >
                    <p className='infos'>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Diesel} alt="" />
                        <p className='fuel-type'>Diesel</p>
                    </div>
                </div>
            )
        else if (props.type === "regular")
            return (
                <div className='text-field' >
                    <p className='infos'>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Regular} alt="" />
                        <p className='fuel-type'>Regular Petrol</p>
                    </div>
                </div>
            )
        else {
            return <></>
        }
    }

    return (
            <div className='carCard'>
                <img src={props.img} alt="" />
                <div className='text-field title'>
                    <p className='car-name'>{props.name}</p>
                    <p className='price'>${props.price}</p>
                </div>
                <Type></Type>
                <div className='text-field'>
                    <p className='infos'>Green Rating:</p>
                    {rateDisplay("green")}
                </div>
                <div className='text-field'>
                    <p className='infos'>Safety rating:</p>
                    {rateDisplay("safety")}
                </div>
            </div>
    )
}