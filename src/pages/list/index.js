import React, { useEffect, useState } from 'react'
import Card from "../../components/card"
import Missions from "../../components/missions/"
import TopBar from "../../components/topBar"
import Hero from "../../components/hero"
import { cars, listBackground } from "../../data/list"
import { colors } from "../../data/global";
import Reviews from '../../components/reviews'
import Car from '../../components/car/'
import Profile from '../profile'
export default function List({ dark }) {
    const listStyleDark = { ...{ backgroundColor: colors.dark.background, color: colors.dark.text }, ...listBackground };
    const listStyleLight = { ...{ backgroundColor: colors.light.background, color: colors.light.text }, ...listBackground };
    const [back, setBack] = useState('');
    const [link, setLink] = useState('');
    const [car, setCar] = useState('')

    const getLink = (str) => {
        setLink(str);
    }

    const home = (
        <div className='card-list' style={(dark) ? listStyleDark : listStyleLight}>
            <Hero dark={dark}></Hero>
            {cars.map(car => {
                return <Card dark={dark} car={car} 
                onClick={() => {
                    setLink('/details')
                    setCar(car)}
                } ></Card>
            })}
            <Missions xl></Missions>
        </div>
    )
    const [body, setBody] = useState(home);

    useEffect(() => {
        if (link === '/home') {
            setBody(home)
            setBack(false)
        }
        else if (link === '/details') {
            setBody(<Car car={car} dark={dark} back={back} sendLink={getLink}></Car>)
            setBack('/home')
        }
        else if (link === '/profile') {
            setBody(<Profile></Profile>)
            setBack('/home')
        }
        else if (link === '/reviews'){
            setBody(<Reviews car={car} dark={dark}></Reviews>)
            setBack('/details')
        }
    }, [link])

    return (
        <div style={(dark) ? listStyleDark : listStyleLight}>
            <TopBar back={back} dark={dark} sendLink={getLink} back={back} ></TopBar>
            {/* <Car car={cars[0]} dark={dark}></Car> */}
            {body}
            {/* <Reviews car={cars[0]} dark={dark}></Reviews> */}
        </div>
    )
}