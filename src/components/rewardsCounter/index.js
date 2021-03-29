import React, {useState} from 'react'
import rewardsIcon from "../../assets/images/rewardGold.svg"


export default function RewardsCounter(props) {
    const [ rewards, setRewards] = useState(10);
    return(
        <div className='rewardsCounter'>
            <img src={rewardsIcon} alt="" />
            <p className='rewardsCounter'>{rewards} reward points</p>
        </div>
    )
}