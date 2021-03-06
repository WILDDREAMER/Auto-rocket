import React from 'react'
import { Reward } from "../../data/list"
import {Link} from 'react-router-dom'
import { colors, logo, rewards } from "../../data/global"
import ProfileIcon from '../../data/images/profileIcon.svg'
import RewardsIcon from '../../data/images/rewardsIcon.svg'

export default function TopBar({ dark, back, sendLink }) {

    const darkStyling = { background: colors.dark.background, justifyContent: (Reward) ? 'space-between' : 'center' };
    const lightStyling = { background: 'white', justifyContent: (Reward) ? 'space-between' : 'center' };
    const backString = '< Back';
    function nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
    return (
        <div className='topBar' style={(dark) ? darkStyling : lightStyling}>
            <div className='profileIcon'>
                {(back) ?
                <p onClick={() => sendLink(back)} className='rewardsCounter'>{backString}</p>
                :
                <img src={ProfileIcon} alt="" onClick={() => sendLink('/profile')}/>}
            </div>
            <Link to='/list'><img onClick={() => sendLink('/home')} className='logo' src={(dark) ? logo.dark : logo.light} alt="" style={(dark) ? { mixBlendMode: "lighten" } : {}} /></Link>
            <div className='rewards'>
                <img src={RewardsIcon} alt="" />
                <p className='rewardsCounter'>{nFormatter(rewards)}</p>
            </div>
        </div>
    )
}