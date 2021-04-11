import React from 'react'
import { colors, Reward } from "../../data/list"
import { logo, rewards } from "../../data/global"
import ProfileIcon from '../../data/images/profileIcon.svg'
import RewardsIcon from '../../data/images/rewardsIcon.svg'

export default function TopBar({ dark, back, sendLink }) {

    const darkStyling = { background: colors.primaryDark, justifyContent: (Reward) ? 'space-between' : 'center' };
    const lightStyling = { background: colors.primaryLight, justifyContent: (Reward) ? 'space-between' : 'center' };
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
                {(back) ? <p onClick={() => sendLink(back)} className='rewardsCounter'>{backString}</p> : <img src={ProfileIcon} alt="" />}
            </div>
            <img className='logo' src={(dark) ? logo.dark : logo.light} alt="" style={(dark) ? { mixBlendMode: "lighten" } : {}} />
            <div className='rewards'>
                <img src={RewardsIcon} alt="" />
                <p className='rewardsCounter'>{nFormatter(rewards)}</p>
            </div>
        </div>
    )
}