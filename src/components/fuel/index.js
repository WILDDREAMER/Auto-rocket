import React from 'react'
import Regular from "../../data/images/regular.svg"
import Premium from "../../data/images/premium.svg"
import Diesel from "../../data/images/diesel.svg"
import { text } from "../../data/list"
import { colors } from "../../data/global"

export default  function Type({car, dark, short}) {
    const textStyling = (dark) ? { color: colors.dark.text } : { color: colors.light.text };

    if (car.fuel === "premium")
        return (
            <div className='text-field' >
                {(short) ? ''  : <p className='infos' style={textStyling}>{text.card.info1}</p>}
                <div className='fuel-container'>
                    <img src={Premium} alt="" />
                    <p className='fuel-type' style={{color:'#E97827'}}>Premium Petrol</p>
                </div>
            </div>
        )
    else if (car.fuel === "diesel")
        return (
            <div className='text-field' >
                {(short) ? '' : <p className='infos' style={textStyling}>{text.card.info1}</p>}
                <div className='fuel-container'>
                    <img src={Diesel} alt="" />
                    <p className='fuel-type' style={textStyling}>Diesel</p>
                </div>
            </div>
        )
    else if (car.fuel === "regular")
        return (
            <div className='text-field' >
                {(short) ? '' : <p className='infos' style={textStyling}>{text.card.info1}</p>}
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