import React, { useState } from 'react'
import arrow from '../../data/images/goto.svg'
import { colors, radius } from '../../data/global'
import { profile } from '../../data/profile'
import Question from '../../data/images/question.svg'
import reward from '../../data/images/rewardsWhite.svg'
import WhatIsMissionPoints from '../missionPoints/'
import donut from '../../data/images/donut.svg'
import background from '../../data/images/missionBackground.svg'
import esso from '../../data/images/esso.svg'
import Redeem from '../redeem'
import TakeTheSurvey from '../takeTheSurvey'
import Missions from '../missions'
import missionReward from '../../data/images/rewards.svg'

export default function MyRewards({ dark }) {
    const cardstyling = dark ? { backgroundColor: colors.dark.card, borderRadius: radius }
        : { backgroundColor: colors.light.card, borderRadius: radius }

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
            <p className='big'>Redeem your Mission points</p>
            <p className='small'>Here’s a few we think will fit you</p>
            <div className='redeemCards'>
                <Redeem dark={dark} image={donut} title='Donut shop' pt={375} desc='25% Discount for any purchase over $50'></Redeem>
                <Redeem dark={dark} image={donut} title='Burger king' pt={350} desc='Buy 1 get 1'></Redeem>
                <Redeem dark={dark} image={donut} title='John’s Auto Shop' pt={750} desc='1 free oil change'></Redeem>
            </div>
            <p className='big'>Earn more Mission points</p>
            <p className='small'>Here’s a few we think will fit you</p>
            <div className='earnCards'>
                <Missions
                    xl
                    icon={missionReward}
                    header='THE NEXT MISSION'
                    title='Take the survey and earn Mission points'
                    subtitle='Description goes here'
                    button='Take the Survey!'
                    background='rgb(255, 192, 67)'
                ></Missions>
                <Missions
                    xl
                    icon={esso}
                    header='MISSION BY ESSO'
                    title='Spend $50 or more at any Esso gas station'
                    subtitle='and receive 100 Mission points'
                    button='I accept the Mission'
                    background={background}
                ></Missions>
            </div>
        </div>
    )
}