import React, { useState } from 'react'

import Regular from "../../assets/images/regular.svg"
import Premium from "../../assets/images/premium.svg"
import Diesel from "../../assets/images/diesel.svg"
import rateDisplay from "./rate-display"

export default function CarCard(props) {

    function Type() {
        if (props.type === "premium")
            return (
                <div className='text-field' >
                    <p className='infos' style={(props.dark) ? {color:'white'} : {}}>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Premium} alt="" />
                        <p className='fuel-type' style={(props.dark) ? {color:'white'} : {}}>Premium Petrol</p>
                    </div>
                </div>
            )
        else if (props.type === "diesel")
            return (
                <div className='text-field' >
                    <p className='infos' style={(props.dark) ? {color:'white'} : {}}>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Diesel} alt="" />
                        <p className='fuel-type' style={(props.dark) ? {color:'white'} : {}}>Diesel</p>
                    </div>
                </div>
            )
        else if (props.type === "regular")
            return (
                <div className='text-field' >
                    <p className='infos' style={(props.dark) ? {color:'white'} : {}}>Fuel type:</p>
                    <div className='fuel-container'>
                        <img src={Regular} alt="" />
                        <p className='fuel-type' style={(props.dark) ? {color:'white'} : {}}>Regular Petrol</p>
                    </div>
                </div>
            )
        else {
            return <></>
        }
    }

    return (
            <div className='carCard'  style={(props.dark) ? {background:'#323338'} : {}}>
                <img src={props.img} alt="" />
                <div className='text-field title'>
                    <p className='car-name' style={(props.dark) ? {color:'white'} : {}}>{props.name}</p>
                    <p className='price' >${props.price}</p>
                </div>
                <Type></Type>
                <div className='text-field'>
                    <p className='infos' style={(props.dark) ? {color:'white'} : {}}>Green Rating:</p>
                    {rateDisplay("green", props)}
                </div>
                <div className='text-field'>
                    <p className='infos' style={(props.dark) ? {color:'white'} : {}}>Safety rating:</p>
                    {rateDisplay("safety", props)}
                </div>
            </div>
    )
}