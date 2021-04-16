import React, {useState} from 'react'
import arrow from '../../data/images/goto.svg'
import { colors , radius} from '../../data/global'
import { profile } from '../../data/profile'
import Question from '../../data/images/question.svg'
import reward from '../../data/images/rewardsWhite.svg'
import WhatIsMissionPoints from '../missionPoints/'

export default function MyRewards({ dark }) {
    const cardstyling = dark ? {backgroundColor: colors.dark.card, borderRadius: radius}
    : {backgroundColor: colors.light.card, borderRadius: radius}

    const [body, setBody] = useState();

    return (
        <div className='myrewards'>
            <div className='rewards'>
                <img src={reward} alt="" />
                <p>You have <br />
                    <span>{profile.rewards} Mission points
                </span></p>
                <img className='question' src={Question} alt="" />
            </div>
            <div className='cards'>
                <div style={cardstyling}>
                    <p>Active coupons (2)</p>
                    <img src={arrow} alt="" />
                </div>
                <div style={cardstyling}>
                    <p>Mission I enrolled in (2)</p>
                    <img src={arrow} alt="" />
                </div>
                <div style={cardstyling}>
                    <p>My missions history</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}