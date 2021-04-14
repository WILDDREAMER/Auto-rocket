import React, { useState } from 'react'
import Timeline from '../../components/timeline'
import { profile } from '../../data/profile'
import { colors } from '../../data/global'
import myRewards from '../../components/myRewards'

export default function Profile({ dark }) {
    const [body, setBody] = useState(<Timeline dark={dark}></Timeline>)
    const [timeline, setTimeline] = useState('selected')
    const [rewards, setRewards] = useState('')
    const styling = (dark) ? { color: colors.dark.text, backgroundColor: colors.dark.backgroundColor }
        :
        {  color: colors.light.text, backgroundColor: colors.light.backgroundColor }
    return (<div className='profile' style={styling}>
        <h1>Profile</h1>
        <img src={profile.image} alt="" />
        <p className='number'>+1 (746) 647-1285</p>
        <p className='addName'>Add Name</p>
        <div className='body'>
            <div className='header'>
                <p className={timeline} onClick={
                    () => {
                        setBody(<Timeline dark={dark}></Timeline>)
                        setTimeline('selected')
                        setRewards('')
                    }
                }>Timeline</p>
                <p className={rewards} onClick={
                    () => {
                        setBody(<myRewards dark={dark}></myRewards>)
                        setTimeline('')
                        setRewards('selected')
                    }
                }>My rewards</p>
            </div>
            <div>
                {body}
            </div>
        </div>
    </div>)
}