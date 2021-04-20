import { radius } from "../../data/global"

export default function WhatPeopleSay({ item }) {
    return (
        <div className='peopleCard' style={{borderRadius: radius, backgroundColor: '#cbccc7'}}>
            <img src={item.image} alt="" />
            <div className='text'>
                <p className='title'>{item.title}</p>
                <p className='comment'>{item.text}</p>
            </div>
        </div>
    )
}